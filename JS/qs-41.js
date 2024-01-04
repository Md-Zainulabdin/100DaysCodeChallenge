/*
Q: How does the map method work in JavaScript, and 
can you provide an example of when you might use it to manipulate an array of objects?
*/

/*
"Map Method"

Map Method is used to iterate over an array,
 the purpose of this iteration is to modify the existing value 
of array, after performing operation it return a new array with updated value;

// Example 

suppose that we have an array of natural number of length 10
 and we want to can the square of each elemnt inside the array 
 this operation can easily be done with the help of Map Method,

 let's see how;

*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredArray = array.map((num) => num * num);

console.log(squaredArray);