//Program to calculate power of a number
const prompt = require("prompt-sync")();

const number = prompt("Enter the range: ")

for(i = 0; i <= number; i++){
    console.log(Math.pow(2, i))
}