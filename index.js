function writeCards(people, gift) {
    let messages = []
    for (let i = 0; i < people.length; i++) {
        messages.push(`Thank you, ${people[i]}, for the wonderful ${gift} gift!`)
    }
    return messages
}

function countDown(start) {
    let i = start
    while(i > -1) {
        console.log(i)
        i--;
    }
}

