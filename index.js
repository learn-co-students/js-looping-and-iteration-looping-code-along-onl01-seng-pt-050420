// Code your solutions in this file
function writeCards(names, type){
    let array = [];
    for (let i = 0; i < names.length; i++){   
     array.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
}
return array
}
function countDown(number){
    for ( number; number >= 0; number--){ 
        console.log(number); 
    }
    return number
}