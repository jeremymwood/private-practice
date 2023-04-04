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
personMachina();

/* Randormize array in-place using Durstenfeld shuffle algorithm */
const shuffleArray = function () {
    for (let i = people.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = people[i];
        people[i] = people[j];
        people[j] = temp;
    }
    console.log(`Votes: [${people}]`);
}
shuffleArray();