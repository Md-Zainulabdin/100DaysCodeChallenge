// 10 -> Question: Calculate the factorial of a number using a do-while loop.

let i = 1;
let number = 5;
let factorial = 1;

do {
    factorial *= i
    i++
} while (i <= number);

console.log("factorial", factorial);
