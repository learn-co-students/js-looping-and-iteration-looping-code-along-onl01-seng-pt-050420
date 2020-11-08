// Code your solutions in this file
function writeCards(names) {
  let x = []
  for (let i = 0; i <= names.length - 1; i++){
   x[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
  }
  return x
}

function countDown(number) {
  let i = 0
  while(i <= number) {
    console.log(number - i)
    i ++
  }
  
}

