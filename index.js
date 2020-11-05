// Code your solutions in this file
//const names = ["abby", "gabby", "ally"]
function writeCards(names, giftType) {
    let thankYous = []
    for (let i = 0; i < names.length; i++) {
    thankYous.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
    }
   return thankYous
}

function countDown(kaboom){

    while (kaboom > 0) {

        console.log(kaboom);
        kaboom -= 1;
    }
    console.log(kaboom);
}