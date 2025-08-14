// AIM : To Count the number of digits in a given number
let numToCount = 123456;
let count = 0;
while (numToCount > 0) {
    numToCount = Math.floor(numToCount / 10);
    count++;
}
console.log(`Number of digits: ${count}`);
