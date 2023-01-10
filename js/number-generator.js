
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

const blockLength = 6;
const finalProductLength = 10;

function finalProduct(length) {
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += makeid(blockLength) + " ";
    }
    return result;
}


console.log(finalProduct(finalProductLength));
// append collection until 2400 characters including spaces met