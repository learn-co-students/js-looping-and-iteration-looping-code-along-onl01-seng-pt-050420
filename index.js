// Code your solutions in this file
function writeCards(array){
    let x = 0;
    let thankYouArray = [];
    while (x < array.length){
        thankYouArray.push(`Thank you, ${array[x]}, for the wonderful surprise gift!`);
        x++;
    }
    return thankYouArray;
}

function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i);
    }
}