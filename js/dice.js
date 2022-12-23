`use strict`;
const rollOutput = document.getElementById("rollOutput");
// rollOutput.innerText = `...`;

const optionContainer = document.getElementById("optionContainer");

const diceArray = [ 4, 6, 8, 10, 12, 20];

const dice = {};

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
}

for (const die of diceArray) {

    const button = optionContainer.appendChild(document.createElement('button'));

    function refresh(){
        rollDice(this.value);
    }

    dice[die] = new function () {
        this.name = `D` + [die];
        this.value = die;
        button.className = this.name;
        button.setAttribute(`value`, `Refresh Webpage.`);
        button.setAttribute(`onclick`, `refresh()`);
        button.innerText = this.name;

        //having problems defining refresh() to return RollDice values with appropriate die.value
        // button.onclick = new function refresh(){
        //     rollDice(this.value);
        // }
    }
}

// function refresh4() {
//     rollDice(4);
// }
//
// function refresh6() {
//     rollDice(6);
// }
//
// function refresh8() {
//     rollDice(8);
// }
//
// function refresh10() {
//     rollDice(10);
// }
//
// function refresh12() {
//     rollDice(12);
// }
//
// function refresh20() {
//     rollDice(20);
// }