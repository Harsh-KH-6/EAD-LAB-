// AIM: To Find the factorial of a given number
let factNum = 5;
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log(`Factorial: ${factorial}`);