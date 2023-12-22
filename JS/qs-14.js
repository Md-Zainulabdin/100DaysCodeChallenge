// 14 -> Question: Find the maximum of three numbers using nested ternary operators.

const findMax = (a, b, c) => {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
}

const maximumNumber = findMax(5, 7, 9);
console.log("The maximum number is:", maximumNumber);