/*
Error Handling:*
   - Q: How would you handle potential errors when using array methods
    like find or reduce? Provide an example of error handling in such a scenario.*/

/*
When using array methods like find or reduce, it's important to handle potential errors gracefully to ensure that your code is robust. Commonly, errors might occur if the array is empt
y or if the callback function provided to these methods produces unexpected results.*/

// With Find Method

const numbers = [1, 2, 3, 4, 5];

try {
    const result = numbers.find(num => {
        if (num === 3) {
            // Simulate an error condition
            throw new Error("Number 3 is not allowed.");
        }
        return num > 3;
    });

    console.log("Result:", result);
} catch (error) {
    console.error("Error:", error.message);
}

// With Reduce Method

const numbers2 = [1, 2, 3, 4, 5];

try {
    const sum = numbers2.reduce((accumulator, current) => {
        if (current === 3) {
            // Simulate an error condition
            throw new Error("Number 3 is not allowed.");
        }
        return accumulator + current;
    }, 0);

    console.log("Sum:", sum);
} catch (error) {
    console.error("Error:", error.message);
}
