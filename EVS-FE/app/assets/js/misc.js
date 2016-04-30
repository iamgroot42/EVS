var serverAddress = "0.0.0.0:5000"

$(document).ready(function(){
    setInterval(function() {
        $.get("http://"+serverAddress+"/getDeviceStatuses",function(data)
        {
            var flag=0;
            console.log(data);
            for (var key in data)
            {
                if(data[key] === true)
                {
                    flag=1;
                    break;
                }
            }
            if (flag===0)
            {
                console.log("All OFF");
                $('#time_countdown').stopCountDown();
            }
            else
            {
                $('#time_countdown').countDown()                                
                console.log("ON");
            }
        });
}, 5000);

});