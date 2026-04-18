let difficulty = 0;
let rows = 0;
let cols = 0;
let minen = 0;
let flaggen = 0;

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
    flaggen = minen
}

schwierigkeit()

let minen_position = Array.from({ length: cols }, () => Array(rows).fill(false));
let minen_nachbar = Array.from({ length: cols }, () => Array(rows).fill(0));

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
}

function spielfeld_erstellen(){
    var grid = document.getElementById("gitter");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
    grid.style.textAlign = "center";

    for (let x = 0; x < cols; x++){
        for (let y = 0; y < rows; y++){
            let Feld = document.createElement("button");
            Feld.style.width = "30px";
            Feld.style.height = "30px";
            Feld.style.backgroundColor = "rgb(169, 169, 169)";
            Feld.style.border = "1px solid #ffffff";
            grid.appendChild(Feld);
            Feld.classList.add("Feld-btn");
            Feld.id = x + "/" + y;
            console.log(Feld.id);
            Feld.addEventListener("contextmenu", function(e){
                e.preventDefault();
                right_click(Feld);
            });
            Feld.addEventListener("click", function(){
                left_click(Feld);
            });
            minen_zahler(Feld);
            console.log(minen_nachbar);
        }
    }
}

minen_wo()

spielfeld_erstellen();

console.log(minen_position);


function right_click(Feld){
    if (Feld.style.backgroundImage.includes('../Bilder/flagge.png')){
        Feld.style.backgroundImage = "none";
    } else {  
        Feld.style.backgroundImage = "url('../Bilder/flagge.png')";
        Feld.style.backgroundSize = "cover";
    }
}

function left_click(Feld){
    Feld.style.backgroundColor = "#1ef3cc";
}

function minen_zahler(Feld){
    for(let x = -1; x < 2; x++){
        for(let y = -1; y < 2; y++){
            if (x == 0 && y == 0){
                continue
            }
            let cords = Feld.id.split("/")
            let new_cords = [
                parseInt(cords[0]) + x,
                parseInt(cords[1]) + y
            ]
            let mx = new_cords[0]
            let my = new_cords[1]
            if (my==-1 || mx==-1 || mx==cols || my==rows){
                continue
            }
            if (minen_position[mx][my]){
                minen_nachbar[cords[0]][cords[1]] += 1
            }
        }
    }
}
