//Program to find whether given year is leap or not
const prompt = require("prompt-sync")();
const year = prompt("Enter a year yyyy ");
if(year.length == 4){
    if( (year %4 == 0) && (year %100 != 0) || (year %400 == 0) )
        console.log("Its a leap year")
    else
        console.log("Its not a leap year")
}
else
console.log("Please enter a valid year");