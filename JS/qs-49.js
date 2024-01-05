/*
Immutable Operations:*
   - Q: Discuss the importance of immutability when working with array methods.
    Demonstrate how you would perform immutable operations using methods like map or filter
*/

/*

Immutability is an important concept in programming, particularly in functional programming paradigms, as it ensures that the original data remains unchanged during operations. When working with array methods like map or filter,
 adopting an immutable approach helps in producing more predictable and maintainable code. 
*/

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log("Original array:", numbers);
console.log("Squared numbers:", squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Original array:", numbers);
console.log("Even numbers:", evenNumbers);
