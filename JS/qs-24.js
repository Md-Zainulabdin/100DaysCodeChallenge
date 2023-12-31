// 9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// for is used for iteration when we actually know how many times we have to iterate over a thing 
// inside its parenthesis we provide three statements the first is counting variable where we define from where 
// we have to start our loop, for second statement we provide the condition which we have to check and then increment or decrement operator

for (let i = 0; i < 20; i++) {
    console.log(i);
}

// while loop is used in such cases where we dont actually know about the number of iterations

let i = 0;
while (i < 20) {
    console.log(i);
    i++;
}

// do-while loop is used in javascript when we need to run our loop first and we have to check the condition

do {
    console.log(i);
    i++;
} while (i < 20);