var acTemp = 0;
var serverAddress = "0.0.0.0:5000"
$(document).ready(function(){
    $.get("http://"+serverAddress+"/getTemperature",function(data)
    {
        acTemp = parseFloat(data);
        $("#device-ac-status").html(acTemp+" °C");
        showMax();
    });
    $("#device-ac-status").html(acTemp+" °C");    
    $(".btn-ac-dec").click(function(){
        acTemp -= 1
        $("#device-ac-status").html(acTemp+" °C");
        showMax();
    });
   $(".btn-ac-inc").click(function(){
        acTemp += 1
        $("#device-ac-status").html(acTemp+" °C");
        showMax();    
    });
    $(".btn-ac-sync").click(function(){
        $.get("http://"+serverAddress+"/getTemperature",function(data)
        {
            acTemp = parseFloat(data);
            $("#device-ac-status").html(acTemp+" °C");
            showMax();
        });
    });
});

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function showMax()
{
    var low = 0,high = 50;
    var temp = acTemp;
    var R = 0,B = 0;
    if(temp<low) B = 255;
    else if(temp>high) R = 255;
    else {
        R = Math.round((temp-low)*255.0/(high-low));
        B = Math.round((high-temp)*255.0/(high-low));
    }
    $("#device-ac-status").css({"color":rgbToHex(R,0,B)});
    $("#device-ac-status").html(acTemp+" °C");
    $.get("http://"+serverAddress+'/setTemperature?val='+acTemp.toString());
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}