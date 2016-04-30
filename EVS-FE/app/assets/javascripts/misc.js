var serverAddress = "192.168.55.80:5000"
var on = false;
$(document).ready(function(){
    $('#time_countdown').stopCountDown();
    setInterval(function() {
        $.get("http://"+serverAddress+"/getDeviceStatuses",function(data)
        {

            dat = JSON.parse(data);
            console.log("here");
            var flag=0;
            console.log(dat);
            for (var key in dat)
            {
                if(dat[key] == true)
                {
                    console.log("TRUE");
                    flag=1;
                    break;
                }
            }

            if (flag==0)
            {
                console.log("All OFF");
                if(on==true)
                    {
                        $('#time_countdown').stopCountDown();
                        on=false;
                    }
                $.ajax({
                    url: "/dashboard/update_entry",
                    success: function(html) {
                    },
                    dataType: "json"
                });
            }
            else
            {
                if(on==false)
                    {
                        $('#time_countdown').countDown(); 
                        on=true;
                    }
                $.ajax({
                    url: "/dashboard/create_entry",
                    success: function(html) {
                    },
                    dataType: "json"
                });
                              
                console.log("ON");
            }
        flag=0;
        });
}, 8000);

});