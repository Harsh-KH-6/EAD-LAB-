// AIM: To Reverse a given number
let givenNum= 12345;
let reversedNum = 0;
while (givenNum > 0) {
    reverseNum = reversedNum * 10 + givenNum % 10;
    givenNum = Math.floor(givenNum / 10);
}
console.log(`Reversed Number: ${reversedNum}`);