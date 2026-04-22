function game_over(){
    verloren = true;
    for (let y = 0; y < rows; y++){
        for (let x = 0; x < cols; x++){
            let Mine_Feld = document.getElementById(x + "/" + y);
            if (minen_position[x][y] && Mine_Feld.style.backgroundImage.includes('../Bilder/Flagge.svg')){
                Mine_Feld.style.backgroundImage = "url('../Bilder/Flagge.svg')";
                Mine_Feld.style.backgroundSize = "cover";
            } else if (minen_position[x][y]){
                Mine_Feld.style.backgroundImage = "url('../Bilder/Mine.svg')";
                Mine_Feld.style.backgroundSize = "cover";
            } else if (!minen_position[x][y] && Mine_Feld.style.backgroundImage.includes('../Bilder/Flagge.svg')){
                Mine_Feld.style.backgroundImage = "none";
                Mine_Feld.style.backgroundImage = "url('../Bilder/FalscheFlagge.svg')";
                Flagge_minus();
            }
        } 
    } 
    setTimeout(function(){
        window.alert("Verloren");     
    },100); 
}
