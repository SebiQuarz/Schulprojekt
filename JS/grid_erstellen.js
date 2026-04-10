var rows = 16;
var cols = 16;

function spielfeld_erstellen(cols, rows){
    var grid = document.getElementById("gitter");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
    grid.style.textAlign = "center";

    for (let x = 0; x < cols; x++){
        for (let y = 0; y < rows; y++){
            Feld = document.createElement("div");
            Feld.style.width = "30px";
            Feld.style.height = "30px";
            Feld.style.backgroundColor = "#434343";
            Feld.style.border = "1px solid #ccc";
            grid.appendChild(Feld);
        }
    }  
}

spielfeld_erstellen(cols, rows);
