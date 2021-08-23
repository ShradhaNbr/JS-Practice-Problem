/*
// To find the sum of 5 random 2 digit numbers and find their sum and average
*/
let sum = 0;
let average = 0;
let maxCount = 5;
for(var i=0;i<maxCount;i++) {
    let dice = Math.floor(Math.random()*90) + 10;
    sum+=dice;
    average=sum/maxCount;
    console.log(dice);
}
console.log("Sum is : " + sum + " Average is : " + average);