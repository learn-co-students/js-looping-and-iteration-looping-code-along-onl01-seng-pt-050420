// Code your solutions in this file

let arr = []

function writeCards(people, event) {
    for (let i = 0; i < people.length; i++) {
        arr.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
    }
    return arr;
}



function countDown(number){
    while (number >= 0) {
        console.log(number--)
    }
}