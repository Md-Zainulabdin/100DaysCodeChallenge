/*Conditional Filtering:*
    37 Implement a function that takes an array of objects 
   with 'age' properties and returns an array of those who are adults
    (age 18 and above) using the filter method.*/

const findAdults = (arr) => {
    const adult = arr.filter((i) => i.age > 18);
    return adult;
}

const peoples = [
    { id: 1, name: "zain", age: 18 },
    { id: 2, name: "bilal", age: 14 },
    { id: 3, name: "ahad", age: 19 },
    { id: 4, name: "raza", age: 21 },
    { id: 5, name: "umer", age: 23 },
]
const adults = findAdults(peoples);
console.log("adults", adults);