function fct_reset(){
    window.alert("Neustart");
    Flaggen = 0;
    updt_anzeige();
    time = -1;
    minen_position = Array.from({ length: cols }, () => Array(rows).fill(false));
    minen_nachbar = Array.from({ length: cols }, () => Array(rows).fill(0));
    var grid = document.getElementById("gitter");
    grid.replaceChildren();
    minen_wo();
    spielfeld_erstellen();
    verloren = false;
}
