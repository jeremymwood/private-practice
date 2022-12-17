//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

const container = document.getElementById("container");

function makeGrid(rows, cols) {
    // container.style.setProperty('--grid-rows', rows);
    // container.style.setProperty('--grid-cols', cols);

    //working row builder
    // for (let i = 0; i < (cols); i++) {
    //     let cell = document.createElement("div");
    //     cell.innerText = i + 1;
    //     container.appendChild(cell).className = "grid-item";
    // }

    // rowContainer
    for (let i = 0; i < (rows); i++) {
        let row = document.createElement("div");
        row.innerText = i + 1;
        container.appendChild(row).className = "row-container";
    }

    // for (let i = 0; i < (cols); i++) {
    //     let cell = document.createElement("div");
    //     cell.innerText = i + 1;
    //     container.appendChild(cell).className = "grid-item";
    // }


    // for (let j = 0; j < (rows); j++) {
    //     let columnBlock = document.createElement("div");
    //     container.appendChild(row).className = "grid-item";
    // }
}

makeGrid(4, 8);


//og
// function makeRows(rows, cols) {
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-cols', cols);
//     for (c = 0; c < (rows * cols); c++) {
//         let cell = document.createElement("div");
//         cell.innerText = (c + 1);
//         container.appendChild(cell).className = "grid-item";
//     };
// };

