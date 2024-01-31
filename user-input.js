const prompt = require("prompt-sync")();
let name = prompt("What is your name? \n");

let a = parseFloat(prompt("Enter first number\n"));
let b = parseFloat(prompt("Enter second number \n"));

console.log(`Hi ${name}`);

function add(a, b, name) {
  console.log(`${name} added ${a + b}`);
}

add(a, b, name);
