//Program to check whether number is prime or not
const prompt = require("prompt-sync")();

const number = prompt("Enter a number")
let isPrime = true

if(number == 1){
    console.log("1 is neither prime nor a composite number ")
}

for(i=2; i<=number/2; i++){
    if(number %i == 0){
        isPrime = false
    }
}
if(isPrime){
    console.log("Its a prime number")
}
else{
    console.log("Its not a prime number")
}