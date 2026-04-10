let difficulty = 1;
let rows = 0;
let cols = 0;
let minen = 0;

function schwierigkeit(){
    switch(difficulty){
        case 0:
            rows = 10;
            cols = 10;
            minen = 10;
            break;
        case 1:
            rows = 16;
            cols = 16;
            minen = 40;
            break;
        case 2:
            rows = 16;
            cols = 32;
            minen = 99;
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
            let Feld = document.createElement("div");
            Feld.style.width = "30px";
            Feld.style.height = "30px";
            Feld.style.backgroundColor = "#434343";
            Feld.style.border = "1px solid #ffffff";
            grid.appendChild(Feld);
        }
    }
}
spielfeld_erstellen();


let minen_position = Array.from({ length: cols }, () => Array(rows).fill(false));

function minen_wo(){
    for(let m = 0; m < minen; m++){
        let x = Math.floor(Math.random() * cols);
        let y = Math.floor(Math.random() * rows);
        if (minen_position[x][y]){
            m--;
            continue;
        }
        minen_position[x][y] = true;
    }
    console.log(minen_position);
}
minen_wo()


