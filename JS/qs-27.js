//. Explain the use of the break and continue
// statements within loops. Provide scenarios where each might be used.

// break statement

/*
`break Statement`
The break statement is used to terminate the execution of a loop prematurely. When encountered,
 it immediately exits the loop, and the program continues with the next statement after the loop.
 */

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log('Okay');
        break;
    }
    console.log(i);
}

/*continue Statement:
The continue statement is used to skip the rest of the loop body and proceed to the next iteration of the loop.
 It doesn't terminate the loop entirely; instead, it moves on to the next iteration.
 */

 for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log('Skipping even number:', i);
        continue; 
    }
    console.log('Processing odd number:', i);
}