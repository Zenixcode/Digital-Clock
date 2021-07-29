const displayTime = document.querySelector('.time');



function runClock(){
    const time = new Date();
    displayTime.textContent = zeroPad(time.getHours()) + " : " + zeroPad(time.getMinutes()) + " : " + zeroPad(time.getSeconds());
    
    function zeroPad(i){
        if(i < 10){
            return "0" + i;
        }
        else{
            return i;
        }
    }
}
runClock();
setInterval(runClock, 1000);