`use strict`;
const rollOutput = document.getElementById("rollOutput");

// const

function refresh4() {
    const rndInt = rollDice(4);
    console.log(rndInt);
    location.reload();
}

function refresh6() {
    const rndInt = rollDice(6);
    console.log(rndInt);
    location.reload();
}

function rollDice(max) {
    let roll = Math.floor(Math.random() * (max)) + 1
    rollOutput.innerText = roll;
    // container.appendChild(row).className = "row-container";
}


// setTimeout(() => {
//     document.location.reload();
// }, 3000);


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