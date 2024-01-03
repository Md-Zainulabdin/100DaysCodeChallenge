/*
Q: Modify the find method to handle the scenario where the
 desired element is not found, returning a custom default object instead.
*/

const users = [
    { id: 1, name: "zain", age: 18 },
    { id: 2, name: "bilal", age: 20 },
    { id: 3, name: "raza", age: 19 },
    { id: 4, name: "ahad", age: 21 },
    { id: 5, name: "umer", age: 25 },
    { id: 6, name: "sunnan", age: 18 },
    { id: 7, name: "abbas", age: 25 },
    { id: 8, name: "haris", age: 22 },
];

const uniqueUser = users.find((user) => {
    if (user.name === "fhh") {
        return user
    } else {
        return {
            error: "User not found!"
        }
    }
});

console.log(uniqueUser);