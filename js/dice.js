`use strict`;
const rollOutput = document.getElementById("rollOutput");

rollOutput.innerText = `x`;

function rollDice(max) {
    // let roll = Math.floor(Math.random() * (max) + 1)
    // rollOutput.innerText = roll;

    // check random
    for (let i = 0; i < 10; i++) {
        let roll = Math.floor(Math.random() * (max) + 1)
        rollOutput.innerText = roll;
        console.log(roll)
    }

    // container.appendChild(row).className = "row-container";
}

// roll test

function refresh4() {
    rollDice(4);
}

function refresh6() {
    rollDice(6);
}

function refresh8() {
    rollDice(8);
}

function refresh10() {
    rollDice(10);
}

function refresh12() {
    rollDice(12);
}

function refresh20() {
    rollDice(20);
}