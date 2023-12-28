// 17 -> Define a function calculateAverage that takes an array of
// numbers as an argument and returns the average value. 

const calculateAverage = (arr) => {
    const sumOfArray = arr.reduce((acc, curr) => acc + curr);
    const average = sumOfArray / arr.length;

    return average;
}

const result = calculateAverage([1, 2, 3, 4, 5]);
console.log("result", result);