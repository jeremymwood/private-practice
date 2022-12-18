`use strict`;
const rollOutput = document.getElementById("rollOutput");

function rollDice(max) {
    let roll = Math.floor(Math.random() * (max) + 1)
    rollOutput.innerText = roll;
    console.log(roll)
    // container.appendChild(row).className = "row-container";
}

// roll test

function refresh4() {
    for (let i = 0; i < 10; i++) {
        rollDice(4);
    }
    // const rndInt = rollDice(4);
    // console.log(rndInt);
    // location.reload();
}