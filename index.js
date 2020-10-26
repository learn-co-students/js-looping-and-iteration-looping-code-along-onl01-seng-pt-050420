// Code your solutions in this file

function writeCards(arr, gift) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(`Thank you, ${arr[i]}, for the wonderful ${gift} gift!`)
    }
    return newArray;
}

function countDown(integer) {
    let i = integer;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}