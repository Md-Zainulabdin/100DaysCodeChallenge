// 20 -> Write a function calculateTax that calculates and returns the tax amount based on a given income.
// Use a ternary operator to determine the tax rate.

function calculateTax(income) {
    const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.15 : 0.2;
    const taxAmount = income * taxRate;
    return taxAmount;
}

let income = 50000;
let tax = calculateTax(income);
console.log(`For income ${income} the tax is ${tax}`);