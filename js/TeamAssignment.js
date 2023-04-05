'use strict';

const voterPool = 5;
let voters = [];

const voterMachina = function() {
    for (let i = 0; i < voterPool; i++) {
        let voter = `Voter ${i + 1}`;
        voters.push(voter);
    }
    console.log("");
    console.log(`Voters: [${voters}]`);
    console.log("");

}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
const castVotes = function () {
    for (let i = 0; i < voters.length; i++) {
        let tempVoters = [];

        for (let j = 0; j < voters.length; j++) {
            if (j !== i) {
                tempVoters.push(voters[j]);
            }
        }

        for (let j = tempVoters.length - 1; j > 0; j--) {
            let k = Math.floor(Math.random() * (j + 1));
            if (tempVoters[j] !== tempVoters[k]) {
                let temp = tempVoters[j];
                tempVoters[j] = tempVoters[k];
                tempVoters[k] = temp;
            }
        }
        console.log(`Voter ${i + 1} votes: [${tempVoters}]`);
    }
}
voterMachina();
castVotes();