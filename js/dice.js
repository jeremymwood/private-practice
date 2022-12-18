`use strict`;
const rollOutput = document.getElementById("rollOutput");

// const

function rollDice(max) {
    let roll = Math.floor(Math.random() * (max - 2) + 1)
    rollOutput.innerText = roll;
    // container.appendChild(row).className = "row-container";
}

const rndInt = rollDice(20);
console.log(rndInt);



// function rollDice(rows, cols) {
//     for (let i = 0; i < (rows); i++) {
//         let row = document.createElement("div");
//         // row.innerText = i + 1;
//         container.appendChild(row).className = "row-container";
//
//         for (let j = 0; j < (cols); j++) {
//             let cell = document.createElement("div");
//             // cell.innerText = j + 1;
//             row.appendChild(cell).className = "grid-item";
//         }
//     }
// }
//
// makeGrid(6, 8);