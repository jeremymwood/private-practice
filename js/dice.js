`use strict`;
const rollOutput = document.getElementById("rollOutput");

const optionContainer = document.getElementById("optionContainer");

const diceArray = [ 4, 6, 8, 10, 12, 20, 100, 1000];

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

    dice[die] = new function () {
        this.name = `D` + [die];
        this.value = die;
        button.setAttribute(`value`, `Refresh Webpage.`);
        button.innerText = this.name;
        button.addEventListener("click", function() {
            rollDice(die);
        });
    }
}