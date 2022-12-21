`use strict`;
const rollOutput = document.getElementById("rollOutput");
// rollOutput.innerText = `...`;

const optionContainer = document.getElementById("optionContainer");

const diceArray = [ 4, 6, 8, 10, 12, 20];

const dice = {};

for (const die of diceArray) {
    dice[die] = new function() {
        this.name = `D`+ [die];
        this.value = die;
    }
    //add button
    const Btn = optionContainer.appendChild(document.createElement('button'));
    //     .className = `${Btn.name}`
    // this.className = Btn.name;

    // Btn.setAttribute(`class`,`${this.name}`);
    Btn.setAttribute(`value`,`Refresh Webpage.`);
    Btn.setAttribute(`onclick`,`refresh ` + this.name);

    Btn.innerText = `...`;

    //value="Refresh Webpage." onclick="refresh4()
}
console.log(dice);

function rollDice(max) {
    const roll = Math.floor(Math.random() * (max) + 1)
    rollOutput.innerText = `${roll}`;

    // check random
    // for (let i = 0; i < 10; i++) {
    //     let roll = Math.floor(Math.random() * (max) + 1)
    //     rollOutput.innerText = roll;
    //     console.log(roll)
    //     //add refresh on next roll)
    // }

    // rollOutput.appendChild(row).className = "row-container";
}

function rollCheck(max) {
    for (let i = 0; i < 10; i++) {
        let roll = Math.floor(Math.random() * (max) + 1)
        // rollOutput.innerText = roll;
        console.log(roll)
    }
}
rollCheck(100)

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