'use strict';
console.log("");

const voterPool = 5;

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
        // console.log(voters[i]);
        // console.log(voterVotes[i]);
        // console.log(voters[i].name);
        // console.log(voters[i].votes);
        console.log(`${voters[i].name} votes: [${voters[i].votes}]`);
    }
    // console.log(voters);
}


const groupMachina = function () {
    console.log("");

    let primaryMatch = [];

    for (let i = 0; i < voters.length; i++) {
        let primarySelection = voters[i].votes[0];
        for (let j = 0; j < voters.length; j++) {
            let testSelection = voters[j].votes[0];

            // let sortedMatch = primaryMatch.sort((a, b) => a.name.localeCompare(b.name));

            if (j !== i &&
                voters[i].name === testSelection
                && voters[j].name === primarySelection
                && (!primaryMatch.includes(voters[i]))
            ) {
                    primaryMatch.push(voters[i]);
                    primaryMatch.push(voters[j]);

                    console.log(`Primary match: ${voters[i].name} and ${voters[j].name}`)
            }
        }
    }
    // console.log(primaryMatch)
}
voterMachina();
castVotes();
groupMachina();