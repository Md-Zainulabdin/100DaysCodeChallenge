/*
Find Method:*
   - Q: How does the find method differ from filter?
    Give an example of a scenario where using find is more appropriate than filter.
*/

/*

Find Method

Find Method is used to find a unique element inside an array,
implentation of find method is same as filter but both are different find only return a 
single value where filter can return multiple values based on condition;
*/

/*
Suppose that we array objects which contain data of users now we need to find a user by its name
*/

const users = [
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

const findedUser = users.find((user) => user.name === "Eva");

console.log(findedUser);
