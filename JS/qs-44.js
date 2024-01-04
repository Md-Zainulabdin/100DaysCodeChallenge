/*
    Reduce Method:
   Describe the purpose of the reduce method and provide 
   an example where you use it to compute a single value from an array of numbers.
*/

/*

Reduce Method:

reduce is a very special method use with array, the purpose of using reduce is to sum up 
the value an array, this method takes two argument the first is a callback function and second is 
the inital value named as accumulator

In the callback function we give it two arruguments which are accumulator and a current value 

*/

const array = [1, 3, 5, 6, 7, 8, 9];
const sum = array.reduce((acc, curr) => acc + curr, 0);

console.log(sum);