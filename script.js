var date = new Date();

function time12(a){
    if(a > 12){
        a -= 12;
    }else if(a === 0){
        a = 12;
    }
    return a;
    }


setInterval(function() {
    date = new Date();
    
    var degHour = time12(date.getHours())*30-90;
    var degMinute = date.getMinutes()*6-90;
    var degSecond = date.getSeconds()*6-90;
    
    
    
    
    $("#hour").css("transform" , "rotate(" + degHour + "deg)");
    
    $("#minute").css("transform" , "rotate(" + degMinute + "deg)");
    
    $("#second").css("transform" , "rotate(" + degSecond + "deg)");
    
    $(".secbox").css("background","white");
    $(".a" + date.getSeconds()).css("background","red");
    
    $(".digital").text(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() );
    
    
    
    


if(date.getSeconds() === 15){
        $(".number:nth-child(2)").css("color" , "red");
    }else{
        $(".number:nth-child(2)").css("color" , "white");
    }



 }, 1000);

$(function(){ 
    var deg = -90;
    for(i=0; i<60; i++){
        $('<div class="secbox a' + i + ' " style="transform:rotate(' + deg +'deg)"></div>').appendTo('.clock'); 
        deg += 6;
    }
});