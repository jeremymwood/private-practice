'use strict';
console.log("");

const voterPool = 6;

let voters = [];
const voterMachina = function() {
    for (let i = 0; i < voterPool; i++) {
        voters[i]  = {
            name: `Voter ${i + 1}`
        };
    }
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
const castVotes = function () {
    voterMachina();

    for (let i = 0; i < voters.length; i++) {
        let voterVotes = [];

        for (let j = 0; j < voters.length; j++) {
            if (j !== i) {
                voterVotes.push(voters[j].name.toString());
            }
        }

        for (let j = voterVotes.length - 1; j > 0; j--) {
            let k = Math.floor(Math.random() * (j + 1));
            if (voterVotes[j] !== voterVotes[k]) {
                let temp = voterVotes[j];
                voterVotes[j] = voterVotes[k];
                voterVotes[k] = temp;
            }
        }
        voters[i].votes = voterVotes;
        console.log(`${voters[i].name} votes: [${voters[i].votes}]`);
    }
}


const groupMachina = function () {
    castVotes();
    console.log("");

    let primaryMatch = [];

    for (let i = 0; i < voters.length; i++) {
        let primarySelection = voters[i].votes[0];
        for (let j = 0; j < voters.length; j++) {
            let testSelection = voters[j].votes[0];

            if (j !== i &&
                voters[i].name === testSelection
                && voters[j].name === primarySelection
                && (!primaryMatch.includes(voters[i]))
            ) {
                primaryMatch.push(voters[i]);
                primaryMatch.push(voters[j]);

                console.log(`Primary group ${(primaryMatch.length)/2}: ${voters[i].name} and ${voters[j].name}`);
            }
        }
    }
    if (primaryMatch.length === 0) {
        console.log("No matches found")
    }
}
groupMachina();