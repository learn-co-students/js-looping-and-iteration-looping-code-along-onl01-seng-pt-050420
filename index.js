function writeCards(namesArray, event) {
    let writtenCards = []
    for (let i = 0; i < namesArray.length; i++) {
        writtenCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return writtenCards
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}