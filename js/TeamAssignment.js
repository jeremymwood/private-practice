'use strict';

const voters = 12;
let people = [];

const personMachina = function() {
    for (let i = 0; i < voters; i++) {
        let person = `Voter ${i + 1}`;
        people.push(person);
    }
    console.log(`Voters: [${people}]`);
}

/* Randormize array in-place using Durstenfeld shuffle algorithm */
const shuffleArray = function () {
    for (let j = people.length - 1; j > 0; j--) {
        let k = Math.floor(Math.random() * (j + 1));
        let temp = people[j];
        people[j] = people[k];
        people[k] = temp;
    }
    console.log(`Votes: [${people}]`);
}
personMachina();
shuffleArray();

//todo:
// run functions for each voter
// remove current voter from array