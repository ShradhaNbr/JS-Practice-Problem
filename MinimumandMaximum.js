// To find minimum and maximum of 5 random 3 digit numbers
const maxCount = 5;
let count = 0;
const number = [];
while(count<maxCount) {
    number[count] = Math.floor(Math.random() * 900)+100;
    count++
}
console.log("Random numbers are : "+ number);
let max=number[0];
let min=number[0];
for(i=0;i<number.length;i++) {
    if(number[i]>max) 
    max=number[i];
    if(number[i]<min) 
    min=number[i];
}
console.log("Maximum number is : " + max);
console.log("Minimum number is : " + min);