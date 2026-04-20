let time = 0;
setInterval(() => {
    if(started==true){
        time++;
        document.getElementById('timer').innerText = time;
    }
}, 1000);
