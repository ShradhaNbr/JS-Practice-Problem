// Program to 1, 10, 100, 1000, etc and display unit, ten, hundred,... using switch statement
const prompt = require('prompt-sync')();

 const number = prompt('Enter a number ');
 
 switch(number) {
     case 1:
         console.log("Units");
         break;
     case 10:
         console.log("Tens");
         break;
     case 100:
         console.log("Hundreds");
         break;
     case 1000:
         console.log("Thousands");
         break;
     case 10000:
         console.log("Ten thousands");
         break;
     case 100000:
         console.log("Lakh");
         break;
     case 1000000:
         console.log("Ten Lakh");
         break;
    case 100000000:
        console.log("Crore");
        break;
    case 1000000000:
        console.log("Ten Crore");
        break;
    default :
    console.log("Invalid Input");
 }
