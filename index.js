//Practice
// for loop structure is below 
// for ([initialization]; [condition]; [iteration]) {[loop body]}
const names = ['Lisa', 'Kaitlin', 'Jan'];
const events = 'surprise';


//important to note that you need an empty array to push the message into the array. 
//also important to note that you NEED to return the array to change the thankYouCards array. 
//lastly ${names[x]} is done so that you can iterate over each element in the array vs. pulling the entire array. 
let thankYouCards = [];


function writeCards(names, event){
    for(let x = 0; x < names.length; x++) {
        thankYouCards.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}



function countDown(x){
    while (x>=0) {
        console.log(x--);
    }
}

