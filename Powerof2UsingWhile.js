//Program to find power of 2 using while loop
const prompt = require('prompt-sync')();

 const number = prompt('Enter the value of n: ');
 
let i=0
 while ( i <= number ) {
     let powerOf2 = Math.pow(2, i);
     if (powerOf2 <= 256) {
         console.log(powerOf2);
         i++;
     }
     else 
         break;
 }