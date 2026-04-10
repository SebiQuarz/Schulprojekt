let difficulty = 1;
let rows = 0;
let cols = 0;
let flaggen = 0;

function schwierigkeit(){
    switch(difficulty){
        case 0:
            rows = 10;
            cols = 10;
            flaggen = 10;
            break;
        case 1:
            rows = 16;
            cols = 16;
            flaggen = 40;
            break;
        case 2:
            rows = 16;
            cols = 32;
            flaggen = 99;
            break;
    }
}

schwierigkeit()


function spielfeld_erstellen(){
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

spielfeld_erstellen();
