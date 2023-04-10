'use strict';
console.log("");

//todo
//group count
//save remaining first round choices for second round consideration


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

let primaryMatch = [];
const primaryMachina = function () {
    castVotes();
    console.log("");

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
let secondaryMatch = [];
const secondaryMachine = function () {
    primaryMachina();
    console.log("");
    let remainingPrimary = [];

    for (let i = 0; i < voters.length; i++) {
        if (!primaryMatch.includes(voters[i])) {
            remainingPrimary.push(voters[i]);
        }
    }

    for (let i = 0; i < remainingPrimary.length; i++) {
        console.log(remainingPrimary[i].name);
    }

    console.log("");
    for (let i = 0; i < remainingPrimary.length; i++) {
        let remainingPrimarySelection = remainingPrimary[i].votes[0];

        for (let j = 0; j < voters.length; j++) {
            let secondarySelection = voters[j].votes[1];

            if (
                remainingPrimarySelection === voters[j].name
                && secondarySelection === remainingPrimary[i].name
                && remainingPrimary.includes(voters[j])
            ) {
                secondaryMatch.push(remainingPrimary[i]);
                secondaryMatch.push(voters[j]);
                console.log(`Secondary group ${(secondaryMatch.length)/2}: ${remainingPrimary[i].name} and ${voters[j].name}`);
            }
        }
    }
    if (secondaryMatch.length !== 0) {
        console.log(secondaryMatch);
    }

    //todo
    //what is the best way to deal with a duplicate secondary match?
    //randomizing is one method but is not representative of the voters' preferences.
    //perhaps a tertiary round to determine who retains the secondary group

}
secondaryMachine();