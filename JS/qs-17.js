// 17 -> Define a function calculateAverage that takes an array of
// numbers as an argument and returns the average value. 

const calculateAverage = (arr) => {

    // calculate the sum of array
    const sumOfArray = arr.reduce((acc, curr) => acc + curr);
    
    // calculate the average with sum using its formula
    const average = sumOfArray / arr.length;

    return average;
}

const result = calculateAverage([1, 2, 3, 4, 5]);
console.log("result", result);