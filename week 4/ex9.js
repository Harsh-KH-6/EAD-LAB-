// AIM : To Accept a string and display it in reverse order (using loop)
let str = "Hello World";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(`Reversed String: ${reversedStr}`);