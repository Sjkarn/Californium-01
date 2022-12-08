const greeting = '   FunctionUp!   ';

function changeToTrim() {
  console.log(greeting);
  console.log(greeting.trim());
}

module.exports.greeting = (greeting)
module.exports.trim = (greeting.trim())
module.exports.changeToTrim = changeToTrim

// ***
let text = "functionUP";
let result = text.toLowerCase();

function changeToLowerCase() {
  console.log(result);
}

module.exports.result = result
module.exports.changeToLowerCase = changeToLowerCase

// ***
let org = "functionUP";
let output = org.toUpperCase();

function changeToUpperCase() {
  console.log(output);
}

module.exports.output = output
module.exports.changeToUpperCase = changeToUpperCase