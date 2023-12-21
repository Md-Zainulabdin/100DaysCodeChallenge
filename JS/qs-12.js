// 12 -> Question: Loop through an array using a for-of loop and double each element. 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubledArray = [];

for (let index of array) {
    doubledArray.push(index + index);

}

console.log("Doubled Array", doubledArray);