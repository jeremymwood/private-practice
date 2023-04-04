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

/* Randomize array in-place using Durstenfeld shuffle algorithm */
const castVotes = function () {
    for (let i = 0; i < people.length; i++) {
        let tempPeople = [];

        for (let j = 0; j < people.length; j++) {
            tempPeople[j] = people[j];
        }

        let indexToRemove = tempPeople[i];
        tempPeople.splice(indexToRemove, 1);
        // console.log(`${people}`);
        // console.log(tempPeople.length);

        // for (let j = tempPeople.length - 1; j > 0; j--) {
        //     let k = Math.floor(Math.random() * (j + 1));
        //     if (tempPeople[j] !== tempPeople[k]) {
        //         let temp = tempPeople[j];
        //         tempPeople[j] = tempPeople[k];
        //         tempPeople[k] = temp;
        //     }
        //     // if (temp !== people[k]) {
        //     // }
        // }
        console.log(`Voter ${i + 1} votes: [${tempPeople}]`);
        console.log(tempPeople.length);
    }
}
personMachina();
castVotes();

//todo:
// run functions for each voter
// remove current voter from array