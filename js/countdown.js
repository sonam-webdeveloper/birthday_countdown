
var birthdate= prompt("Enter your birth date(1-31)");
var birthmonth= prompt("Enter Birth month(1-12)");
var upcomingyear=prompt("Enter Upcoming year");

function countdown(){
 const today=new Date().getTime();

var remaining= new Date(`${upcomingyear}-${birthmonth}-${birthdate} 00:00:00`)-today;
const day=Math.floor(remaining/(1000*60*60*24));
const hour=Math.floor(remaining/(1000*60*60))%24;

const minute=Math.floor(remaining/(1000*60))%60;

const second=Math.floor(remaining/1000)%60;
document.querySelector(".days").innerHTML=day;
document.querySelector(".hours").innerHTML=hour;
document.querySelector(".minutes").innerHTML=minute;
document.querySelector(".seconds").innerHTML=second;


if(birthdate==0 && birthmonth==0 &&upcomingyear==0){
    document.querySelector(".greet").innerHTML="Please put valid values!"
    document.querySelector(".days").innerHTML="00";
document.querySelector(".hours").innerHTML="00";
document.querySelector(".minutes").innerHTML="00";
document.querySelector(".seconds").innerHTML="00";
    
}
else if(remaining<0)
{
    document.querySelector(".greet").innerHTML="Time Expired!"
   
}
else{
    document.querySelector(".greet").innerHTML="Time starts now!!"

}
}
countdown()
setInterval(countdown, 1000);



/*var deadline= new Date('october 14, 2021 24:00:00').getTime();
var x=setInterval(function() {
var now = new Date().getTime();

var t= deadline-now;
var day=document.querySelector(".days");
var hour=document.querySelector(".hours");
var minute=document.querySelector(".minutes");
var second=document.querySelector(".seconds");
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);


var day=Math.floor(t/(1000*60*60*24));
var hour=Math.floor(t/(1000*60*60))%24;
var minute=Math.floor(t/(1000*60))%60;
var second=Math.floor(t/1000)%60;


document.querySelector(".days").innerHTML=day;
document.querySelector(".hours").innerHTML=hour;
document.querySelector(".minutes").innerHTML=minute;
document.querySelector(".seconds").innerHTML=second;
if(t<0)
{
    clearInterval(x);
    document.querySelector(".greet").innerHTML="Expired!"
}
 

}, 1000);*/










