class DashboardController < ApplicationController
  def index
  	Entry.any_in(:end_hour_of_day => [-1]).destroy_all
  	entries = Entry.all
  	if entries.size > 0
	  	gon.hourly = []
	  	gon.geo=[]
	  	gon.dow_hod = []
	  	entries.each do |e|
	  		temp={}
	  		temp['x'] = e.day_of_week
	  		temp['y'] = e.start_hour_of_day
	  		temp['z'] = ((e.time_end - e.time_start)* 24 * 60 * 60).to_i
	  		gon.dow_hod<<temp

            geo={}
            geo['latitude'] = 28.547291
            geo['longitude'] = 77.273201
            geo['elec'] = ((e.time_end - e.time_start)* 24 * 60 * 60).to_i
            gon.geo<<geo


	  	end
  	end
  end

  def create_entry
  	t=Time.now
  	u=Entry.new(time_start: t,start_hour_of_day: t.strftime('%H'), day_of_week: t.wday)
  	u.save
  end

  def update_entry
  	puts params[:day_of_week]
  	t = Time.now
 	Entry.where(end_hour_of_day: -1).first.update_attributes!(time_end: t, end_hour_of_day: t.strftime('%H'))
 	@t = {"success":true}
    respond_to do |format|
      format.js {render json: @t}
      format.html
    end
  end
end
