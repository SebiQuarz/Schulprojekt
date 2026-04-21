function check_win(){
    let sichere_Felder = (rows * cols) - minen;
    if (visited.size == sichere_Felder){
        win();
    }
}

function win(){
    verloren = true;
    for (let y = 0; y < rows; y++){
        for (let x = 0; x < cols; x++){
            let Feld = document.getElementById(x + "/" + y);
            if (Feld){
                if (minen_position[x][y] == true){
                Feld.style.backgroundImage = "url('../Bilder/Flagge.svg')";
                Feld.style.backgroundSize = "cover";
                }
            }
        }
    }
    Flaggen = minen;
    updt_anzeige();
    setTimeout(function(){
        window.alert("Gewonnen");
    },100);
}
