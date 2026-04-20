let time = 0;
setInterval(() => {
    if(started==true && verloren == false){
        time++;
        document.getElementById('timer').innerText = time;
    }
}, 1000);
