// Code your solutions in this file
let arr = []

function writeCards(person, eventType){
    for (let i = 0; i < person.length; i++){
        arr.push(`Thank you, ${person[i]}, for the wonderful ${eventType} gift!`)
    }
    return arr
}

function countDown(start){
    while (start > 0){
        console.log(start);
        start -= 1;
    }
    console.log(start);
}
