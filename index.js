// Code your solutions in this file
function countDown(numb) {
    let cDNumber = numb
    while (cDNumber >= 0){
        console.log(cDNumber)
        cDNumber--
    }
}

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }