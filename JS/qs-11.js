// 11 -> Question: Iterate through the properties of an object using a for-in loop.

const obj = {
    name: "Muhammad Zain-ul-Abdin Ansari",
    age: 18,
    email: "muhammadzainulabdinansari@gmail.com",
    gender: "Male"
}

for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}