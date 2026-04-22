let Flaggen = 0;

function updt_anzeige(){
    let Flaggen_Uebrig = minen - Flaggen
    let anzeige = document.getElementById('flaggen_cnt')
    if (Flaggen_Uebrig < 10){
        anzeige.innerText = `00${Flaggen_Uebrig}`
    }
    else if (Flaggen_Uebrig < 100){
        anzeige.innerText = `0${Flaggen_Uebrig}`
    }
    else{
        anzeige.innerText = Flaggen_Uebrig
    }
}
function Flagge_plus() {
    Flaggen++;
    updt_anzeige();
} 

function Flagge_minus() {
    Flaggen--;
    updt_anzeige();
}
