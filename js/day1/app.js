var wish = "test";
function clock(){
    var currentDate=new Date();
    var hr=currentDate.getHours();
    var min=currentDate.getMinutes();
    var sec=currentDate.getSeconds();

    
    if(hr>=0 && hr<12)
    wish=" good morning";
    else if(hr>=12 && hr<17)
    wish="good afternoon";
    else 
    wish="good evening";

var session="AM";
if(hr==0){
    hr=12;
}
if(hr>12){
    hr=hr-12;
    session="PM";
}
hr=(hr<=9) ? "0" + hr:hr;
min=(min<=9) ? "0" + min:min;
sec=(sec<=9) ? "0" + sec:sec;

var time = hr + ":" +min +":"+ sec +":" + session;

var month=['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec'];

document.getElementById('greet').innerHTML=wish;
document.getElementById('time').innerHTML=time;

document.getElementById('date').innerHTML=currentDate.getDate()+" "+month[currentDate.getMonth()]+" "+(currentDate.getFullYear());
}
setInterval(clock, 1000);