const names = ["Lisa", "Kaitlin", "Jan"]
const gift = "surprise"

function writeCards(names, gift) {

    const messages = []
    for (let i = 0; i < names.length; i++ ) {
         messages.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
      
    }
    return messages;
  
}

function countDown(count) {

    let x = 10;
    while (x >= 0) {
        
        console.log(x--);
        
    }

}