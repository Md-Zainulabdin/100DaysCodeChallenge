// 5 -> Question: Find the sum of all positive numbers in an array.

const sumOfPositiveNumbers = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] < 0)) {
            sum += arr[i];
        }
    }

    return sum;
}

const result = sumOfPositiveNumbers([0, 6, 3, 8, 9, 3]);
console.log("result: ", result);