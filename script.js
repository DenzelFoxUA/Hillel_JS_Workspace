document.addEventListener("DOMContentLoaded", function()
{
    const secondsText = document.getElementById("clockStartValue");
    const goBtn = document.querySelector("#confirmBtn");
    const resetBtn = document.querySelector("#resetBtn");
    const timerContainer = document.getElementById("timerContainer");
    let time = 0;
    let isTimerStarted = false;

    goBtn.addEventListener("click",() => {
        if(secondsText.value.trim() !== "")
        {
            time = secondsText.value.trim();
            startTimer();
        }
    })

    resetBtn.addEventListener("click",()=>{
        if(isTimerStarted)
        {
            time = 0;
            timerContainer.innerHTML = "";
            isTimerStarted = false;
            goBtn.disabled = false;
        }
    })

    function startTimer()
    {
        isTimerStarted = true;
        goBtn.disabled = true;
        const clockTimeout = setInterval(()=>{
            
            if(time <= 0)
            {
                clearInterval(clockTimeout);
                alert("Time is up!");
                return;
            }

            time--;
            renderTimer();
        }, 1000)
    }

    function renderTimer()
    {
        timerContainer.innerHTML = "";
        const timer = document.createElement("span");
        if(time <= 60)
        {
            timer.classList.toggle("timeBomb_red");
        }
        else
        {
            timer.classList.toggle("timeBomb");
        }

        timer.textContent = convertTimeString(time);
        timerContainer.appendChild(timer);
    }

    function convertTimeString(time)
    {
        let hours = Math.floor(time/3600);
        let minutes = Math.floor((time%3600)/60);
        let seconds = time%60;

        return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    }
})