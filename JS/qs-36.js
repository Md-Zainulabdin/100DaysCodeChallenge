/*Chaining Methods:*
   36 Q: Create a chain of array methods to find the average of all positive numbers
    in an array of mixed integers and return the result rounded to two decimal places.*/

const array = [1, 2, 3, 4, 5, -6, -3, 0, -5];

const average = (array.filter((item) => item >= 0).reduce((acc, curr) => acc + curr) / array.filter((item) => item >= 0).length).toFixed(2);

console.log(average);