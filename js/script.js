//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

const container = document.getElementById("container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    // for (let j = 0; j < (rows); j++) {
    //     let cell = document.createElement("div");
    //     cell.innerText = j + 1;
    //     container.appendChild(cell).className = "grid-item";
    // }

    for (let j = 0; j < (rows); j++) {

    }

    for (let i = 0; i < (cols); i++) {
        let row = document.createElement("div");
        row.innerText = i + 1;
        container.appendChild(row).className = "grid-item";
    }
}

makeGrid(4, 8);
// function makeRows(rows, cols) {
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-cols', cols);
//     for (c = 0; c < (rows * cols); c++) {
//         let cell = document.createElement("div");
//         cell.innerText = (c + 1);
//         container.appendChild(cell).className = "grid-item";
//     };
// };

