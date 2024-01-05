/*
Callback Functions:*
   - Q: Explain the concept of callback functions in the context of array methods.
    Provide an example of using a callback function with the map method.
*/

/*
// Callback Function


In JavaScript, callback functions are functions that are passed as arguments to other functions.
In the context of array methods, callback functions are commonly used to define the logic that needs to be applied to each element of an array. 
*/

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (num) {
    return num * num;
}); 

console.log(squaredNumbers);
