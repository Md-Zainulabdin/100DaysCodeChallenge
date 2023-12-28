// 19 -> Write a loop that iterates over an array of numbers and logs
// whether each number is even or odd, using a ternary operator.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    const result = arr[i] % 2 === 0 ? "Even" : "Odd";

    console.log("result :", result);
}