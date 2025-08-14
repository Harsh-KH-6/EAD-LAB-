// AIM : To Check whether a number is a prime number
let primeCheck = 29;
let isPrime = true;
if (primeCheck <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primeCheck); i++) {
        if (primeCheck % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(`${primeCheck} is ${isPrime ? "prime" : "not prime"}`);