// 18 -> Create an object named student with properties name, age, and grades.
// Add a method calculateAverage that calculates the average of the grades.

const student = {
    name: "Zain-ul-Abdin",
    age: 18,
    grades: [90, 89, 78, 95, 87],
    calculateAverage: function () {
        // calculate the sum of array
        const sum = this.grades.reduce((acc, curr) => acc + curr);
        // calculate the average with sum using its formula
        const average = sum / this.grades.length;

        return average;
    }
};

const result = student.calculateAverage();
console.log("result :", result);