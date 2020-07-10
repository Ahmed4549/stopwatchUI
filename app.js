var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 99){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
 else if(sec >= 60){
            sec = 0;
            min++;
            minHeading.innerHTML = min;
            
    }   
}
function start(){
    interval = setInterval(timer,10);
    document.getElementById('btn2').disabled = false;
    document.getElementById('btn3').disabled = false;
}
function stop(){
    clearInterval(interval);
    document.getElementById('enablerr').disabled = false;
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    clearInterval(interval);
    document.getElementById('enablerr').disabled = false;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
}