var counter=1;
setInterval(function(){
    document.getElementById('radio' +counter).checked=true;
    counter++;
    if(counter>5){
        counter=1;
    }

},3000);

let day=document.getElementById("day-box");
let hour=document.getElementById("hour-box");
let min=document.getElementById("min-box");
let sec=document.getElementById("sec-box");
let endDate=new Date(2023,9,2,16,30);
let endTime=endDate.getTime();
function countdown(){
    let todayDate=new Date();
    let todayTime=todayDate.getTime();
    let remainingTime=endTime - todayTime;
    let oneMin= 60 * 1000;
    let oneHr= 60 * oneMin;
    let oneDay= 24* oneHr;
   
    if(endTime <todayTime){
        clearInterval(i);
        document.querySelector(".countdown").innerHTML='<h1>countdown has expired</h1>';
    }
    else{
        let daysLeft=Math.floor(remainingTime / oneDay);
        let hrLeft=Math.floor((remainingTime % oneDay) / oneHr);
        let minLeft=Math.floor((remainingTime % oneHr) / oneMin);
        let secLeft=Math.floor((remainingTime % oneMin) / 1000);
        //dispaly values:-
        day.textContent =daysLeft;
        hour.textContent=hrLeft;
        min.textContent =minLeft;
        sec.textContent =secLeft;

    }
}
let i = setInterval(countdown,1000);
countdown();
