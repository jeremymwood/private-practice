'use strict';
console.log("");

const voterPool = 5;

let voters = [];
const voterMachina = function() {
    for (let i = 0; i < voterPool; i++) {
        voters[i]  = {
            name: `Voter ${i + 1}`
        };
        // console.log(voters[i].name);
    }
    // console.log("");
    // console.log(`Voters: [${voters.name}]`);
    // console.log(voters)
    // console.log("");

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

        // const tempVotes = [...new Set(tempVoters.flatMap(x=>[x.name]))]
        // console.log(`${voters[i].name} votes: [${tempVotes}]`);


        // console.log(`${voters[i].name} votes: [${tempVoters[i].name}]`);
        // console.log(tempVoters[i].name);
        // console.log(tempVoters);
        voters[i].votes = tempVoters

        // console.log(voters[i].votes)
    }
        console.log(voters[4].votes)
}
voterMachina();
castVotes();