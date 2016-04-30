class Entry
  include Mongoid::Document  
  field :latitude,                   type: String,  default: "28.547291"
  field :longitude,                   type: String,  default: "77.273201"
  field :start_hour_of_day,           type: Integer, default: -1  
  field :end_hour_of_day,           type: Integer, default: -1  
  field :day_of_week,           type: Integer, default: -1
  field :time_start,			type: DateTime
  field :time_end,			type: DateTime
end