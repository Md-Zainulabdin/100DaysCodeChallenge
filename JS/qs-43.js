/*
    Sort Method:
   Q: Discuss the default behavior of the sort method for strings and numbers. How would 
   you use a custom comparison function to sort an array of objects by a specific property?

*/

/*

Sort Method

Sort method in javascript is use to sort an array in ascending or descending order
this method help us to organize our array, It takes two argument the first one is refers to current
value and second one is about next one, with this arguments it compare both of them 
and decide which should be place first, then and then.. 

*/

// Example

const array = [1, 6, 3, 9, 4, 7, 3, 5, 0];
const sortedArray = array.sort((a, b) => a - b);

console.log(sortedArray);