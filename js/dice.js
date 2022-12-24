`use strict`;
const rollOutput = document.getElementById("rollOutput");

const optionContainer = document.getElementById("optionContainer");

const diceArray = [ 4, 6, 8, 10, 12, 20, 100, 1000, 10000, 100000, 1000000];

//

const dice = {};

function rollDice(max) {
    const roll = Math.floor(Math.random() * (max) + 1)
    rollOutput.innerText = `${roll.toLocaleString("en-US")}`;

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
        this.name = `D` + [die.toLocaleString("en-US")];
        this.value = die;
        button.innerText = this.name;
        button.addEventListener("click", function() {
            rollDice(die);
        });
    }
}