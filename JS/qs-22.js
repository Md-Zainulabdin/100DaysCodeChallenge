
// 22 -> Compare the for...in loop and the for...of loop
// in terms of their use cases and the types of values they iterate over.

/* 
Let see what is the difference between for in or for of loop in JavaScript 

They both are the special loop introduce in the es6 version of javascript the
 purpose of using these loops can be different because they both have their own use cases but let's discuss both of them one by one

So start with for in which we mostly used with object beacuse its help us to iterate over the keys 
inside our object lets see the example as well for better understanding 

*/

let student = {
    name: "zain",
    age: 18,
    field: "CS"
}

for (let key in student) {
    console.log(student[key]);
}

/*If talking about for of loop so it often use with array to iterate over an element
 inside the array it help us to get each element of an array one by one
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let index of array) {
    console.log(index);
}