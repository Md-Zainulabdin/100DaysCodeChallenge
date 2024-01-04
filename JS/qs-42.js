/*
 Filter Method
 Q: Explain the purpose of the filter method. Provide an example
 where you use filter to extract elements from an array based on a specific condition.

*/


/*
"Filter Method"

Filter Method is used to filter an existing array based on same conditions.
the most common use case can be that we have list of user with multiple fields and
we want to filter the user based on some condition

// Example 

suppose that we have an array of object where we have keys, name, age
email and we want to filter only user whose age is greater than 18

 let's see how;

*/

const arrayOfObjects = [
    { name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 22, email: 'bob@example.com' },
    { name: 'Eva', age: 18, email: 'eva@example.com' },
    { name: 'Michael', age: 35, email: 'michael@example.com' },
    { name: 'Sophie', age: 16, email: 'sophie@example.com' },
    { name: 'David', age: 32, email: 'david@example.com' },
    { name: 'Laura', age: 29, email: 'laura@example.com' },
    { name: 'Chris', age: 17, email: 'chris@example.com' },
    { name: 'Olivia', age: 31, email: 'olivia@example.com' }
];

const filteredArray = arrayOfObjects.filter((user) => user.age > 18);
console.log(filteredArray);