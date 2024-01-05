/*
Combining Methods:*
   - Q: Create a chain of array methods (map, filter, reduce, etc.)
    to transform an array of strings into a single concatenated string with a specific condition
*/

const arrayOfStrings = ["mercedes", "BMW", "Audii", "Roll Royce", "ford"];

const result = arrayOfStrings
    .filter(str => str.length > 3)
    .map(str => str.toUpperCase())
    .reduce((acc, curr) => acc + curr, '');

console.log(result);  
