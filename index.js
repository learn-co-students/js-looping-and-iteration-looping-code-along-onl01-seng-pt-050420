// Code your solutions in this file
function writeCards(names, event)
{
  let thankYouArray = [];
  for (let i = 0; i < names.length; i++)
  {
    thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  
  return thankYouArray;
}

function countDown(startingPoint)
{
  while (startingPoint >= 0)
  {
    console.log(startingPoint);
    startingPoint--;
  }
}