// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];
const events = 'surprise';
let thankYouCards = [];

function writeCards(names,events) {
    for (let x = 0; x < names.length; x++) {
        
        thankYouCards.push(`Thank you, ${names[x]}, for the wonderful ${events} gift!`);
    }
    return thankYouCards;
}

function countDown(x){
    while (x>=0) {
        console.log(x--);
    }
}

