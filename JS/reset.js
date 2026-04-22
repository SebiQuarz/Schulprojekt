function fct_reset(){
    started = false;
    document.getElementById('timer').innerText = 0;
    time = 0;
    Flaggen = 0;
    document.getElementById('timer').innerText = "000";
    updt_anzeige();
    minen_position = Array.from({ length: cols }, () => Array(rows).fill(false));
    minen_nachbar = Array.from({ length: cols }, () => Array(rows).fill(0));
    var grid = document.getElementById("gitter");
    grid.replaceChildren();
    visited = new Set();
    minen_wo();
    spielfeld_erstellen();
    verloren = false;
}
