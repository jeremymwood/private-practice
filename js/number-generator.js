
function makeid(length) {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    // prints iterating groups of unit block
    // console.log(result);
    }
    return result;
}
// prints block
// console.log(makeid(6));
const blockLength = 4;
const desiredLength = 2400;

function finalProduct(length) {
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += makeid(blockLength) + " ";
    }
    return result;
}
let body = document.querySelector("body");
let numContainer = document.createElement('div');
numContainer.setAttribute("id", "numContainer");
body.appendChild(numContainer);
numContainer.innerHTML = finalProduct(desiredLength/(blockLength + 1));

let countContainer = document.createElement('div');
countContainer.setAttribute("id", "countContainer");
body.appendChild(countContainer);
countContainer.innerHTML = "Character Count: " + numContainer.innerHTML.length;

// change