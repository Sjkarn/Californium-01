let today = new Date();
let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

function printDate() {
  console.log(date);
}

module.exports.date = date
module.exports.printDate = printDate

// ***
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let name = month[d.getMonth()];

function printMonth() {
  console.log(name);
}

module.exports.name = name
module.exports.printMonth = printMonth

// ***
let myData = {
  batchName: 'Californium-01',
  week: 7,
  day: 'Thursday',
  topicName: 'NodeJs',
}

function getBatchInfo() {
  console.log(myData);
}

module.exports.myData = (myData)
module.exports.getBatchInfo = getBatchInfo