/*
- Q: Given an array of arrays containing numbers,
 use a combination of array methods to flatten the structure and
  then calculate the sum of all the numbers.
*/

const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const sum = arrayOfArrays.flat().reduce((acc, curr) => acc + curr, 0)

console.log(sum); 