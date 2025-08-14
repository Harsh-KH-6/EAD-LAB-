// AIM : To Display the Fibonacci series up to n terms
let fibTerms = 10;
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= fibTerms; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}