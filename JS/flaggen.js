let Flaggen = 0;

function updt_anzeige(){
    const anzeige = document.getElementById('flaggen_cnt');
    if (anzeige){
        anzeige.innerText = (minen - Flaggen);
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
