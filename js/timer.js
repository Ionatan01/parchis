export function startTimer(seconds) {
    let divTimer = document.querySelector('#timer');
    if (seconds == null) {
        let seconds = 0;   
    }
    
    setInterval(()=> {
        seconds++;
        divTimer.innerHTML = returnTimerValue(seconds);
    }, 1000);
    
}

function returnTimerValue(sec) {
    let secondsText = "";
    let minutesText = "";
    
    if ((Math.trunc(sec/60) + "").length < 2) {
        minutesText = "0" + Math.trunc(sec/60);
    } else {
        minutesText = Math.trunc(sec/60);
    }
    
    if (((sec%60) + "").length < 2) {
        secondsText = "0" + sec%60;
    } else {
        secondsText = sec%60;
    }

    return minutesText + ":" + secondsText;
}

