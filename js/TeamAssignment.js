'use strict';

const voters = 12;
function personMachina() {
    let people = [];
    for (let i = 0; i < voters; i++) {
        // console.log(`Person ${i + 1}`);
        let person = `Person ${i + 1}`;
        // console.log(person);
        people.push(person);
    }
}

// people = personMachina();
// console.log(personMachina());
console.log(people);

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}