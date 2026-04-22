let time = 0;
document.getElementById('timer').innerText = "000";
setInterval(() => {
    if(started==true && verloren == false){
        time++;
        if (time < 10){
            document.getElementById('timer').innerText = `00${time}`
        }
        else if (time < 100){
            document.getElementById('timer').innerText = `0${time}`
        }
        else{
            document.getElementById('timer').innerText = time
        }
    }
}, 1000);
