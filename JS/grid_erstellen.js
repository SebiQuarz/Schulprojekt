let difficulty = 1;
let rows = 0;
let cols = 0;
let minen = 0;
let verloren = false;

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
    fct_reset();
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

    for (let y = 0; y < rows; y++){
        for (let x = 0; x < cols; x++){
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
    if (Feld.style.backgroundImage.includes('../Bilder/Flagge.png')){
        Feld.style.backgroundImage = "none";
        Flagge_minus();
    } else if (Flaggen < minen && visited.has(Feld.id) == false) {  
        Feld.style.backgroundImage = "url('../Bilder/Flagge.png')";
        Feld.style.backgroundSize = "cover";
        Flagge_plus();  
    }
}

const visited = new Set();

function left_click(Feld){
    if (visited.has(Feld.id)){
        return;
    }
    visited.add(Feld.id);
    if (Feld.style.backgroundImage.includes('../Bilder/Flagge.png')){
        Feld.style.backgroundImage = "none";
        Flagge_minus();
    }
    let cords = Feld.id.split("/");
    let x = parseInt(cords[0]);
    let y = parseInt(cords[1]);
    let minen_anzahl = minen_nachbar[x][y];
    if(minen_position[x][y]){
        window.alert("Verloren");
        Feld.style.backgroundImage = "url('../Bilder/Mine.png')";
        Feld.style.backgroundSize = "cover";
    }
    else{
        switch(minen_anzahl){
            case 1:
                Feld.style.backgroundImage = "url('../Bilder/1.png')";
                Feld.style.backgroundSize = "cover";
                break;
            case 2:
                Feld.style.backgroundImage = "url('../Bilder/2.png')";
                Feld.style.backgroundSize = "cover";
                break;
            case 3:
                Feld.style.backgroundImage = "url('../Bilder/3.png')";
                Feld.style.backgroundSize = "cover";
                break;
            case 4:
                Feld.style.backgroundImage = "url('../Bilder/4.png')";
                Feld.style.backgroundSize = "cover";
                break;
            case 5:
                Feld.style.backgroundImage = "url('../Bilder/5.png')";
                Feld.style.backgroundSize = "cover";
                break;
            case 6:
                Feld.style.backgroundImage = "url('../Bilder/6.png')";
                Feld.style.backgroundSize = "cover";
                break;
            case 7:
                Feld.style.backgroundImage = "url('../Bilder/7.png')";
                Feld.style.backgroundSize = "cover";
                break;
            case 8:
                Feld.style.backgroundImage = "url('../Bilder/8.png')";
                Feld.style.backgroundSize = "cover";
                break;
            case 0:
                Feld.style.backgroundColor = "#000";
                for(let zx = -1; zx < 2; zx ++){
                    for(let zy = -1; zy < 2; zy++){
                        if(zx == 0 && zy == 0){
                            continue;
                        }

                        let nx = zx + x;
                        let ny = zy + y;

                        if(nx < 0 || ny < 0 || nx >= cols || ny >= rows){
                            continue;
                        };
                        let Feld2 = document.getElementById(nx + "/" +  ny)
                        left_click(Feld2)
                    }
                }
                break;
        }
    }
}

function minen_zahler(Feld){
    let cords = Feld.id.split("/")
    let fx = parseInt(cords[0]);
    let fy = parseInt(cords[1]);
    for(let x = -1; x < 2; x++){
        for(let y = -1; y < 2; y++){
            if (x == 0 && y == 0){
                continue
            }
            let new_cords = [
                fx + x,
                fy + y
            ]
            let mx = new_cords[0]
            let my = new_cords[1]
            if (my==-1 || mx==-1 || mx==cols || my==rows){
                continue
            }
            if (minen_position[mx][my]){
                minen_nachbar[fx][fy] += 1
            }
        }
    }
}
