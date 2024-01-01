/* 31 -> "Map Transformation:"
- Q: Given an array of integers, use the map method to square
each element and return a new array with the squared values.*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let squaredArray = arr.map((i) => i * i);
console.log(squaredArray);