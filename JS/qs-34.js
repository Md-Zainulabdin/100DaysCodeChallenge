/*
*Reduce for Aggregation:*
34 -> Q: Use the reduce method to find the total sum of all even numbers in an array of integers.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sum of all even number in array
const sum = array.reduce((acc, curr) => {
    if (curr % 2 !== 0) {
        return acc;
    }

    return acc + curr;
}, 0);

console.log("sum:", sum);

