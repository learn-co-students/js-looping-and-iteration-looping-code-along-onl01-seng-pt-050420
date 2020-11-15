const names = ["Lisa", "Kaitlin", "Jan"];
const eventname = 'surprise';

function writeCards(names, eventname){
  const newArray = new Array();
  for (let countDown = names.length -1; countDown >= 0; countDown--){
  newArray.push(`Thank you, ${names[countDown]}, for the wonderful ${eventname} gift!`);
  console.log(`Thank you, ${names[countDown]}, for the wonderful ${eventname} gift!`);
  }
  return newArray;
}
writeCards(names, eventname);
