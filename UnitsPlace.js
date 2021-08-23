//Program to read 1,10,100... and print units, tens, hundreds...
const prompt = require('prompt-sync')();

 const number = prompt('Enter a number ');
  
 if ( number == 1 ) {
     console.log("Units");
 }
 else if ( number == 10 ) {
     console.log("Tens");
 }
 else if ( number == 100 ) {
     console.log("Hundreds");
 }
 else if ( number == 1000 ) {
     console.log("Thousands");
 }
 else if ( number == 10000 ) {
     console.log("Ten thousands");
 }
 else if ( number == 100000 ) {
     console.log("Lakhs");
 }
 else if ( number == 1000000 ) {
     console.log("Ten Lakhs");
 }
 else if ( number == 10000000 ) {
     console.log("Crore");
 }
 else if ( number == 100000000 ) {
     console.log("Ten crore");
 }
 else
 console.log("Invalid Input");