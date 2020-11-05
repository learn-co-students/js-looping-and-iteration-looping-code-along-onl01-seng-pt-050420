function writeCards(names, e_name) {
    let msg = []
    for (let c = 0; c < names.length; c++) {
        msg.push(`Thank you, ${names[c]}, for the wonderful ${e_name} gift!`)
    }
    return msg;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
