//Provide an example of using optional
// chaining within a loop to access a potentially missing property of an object.

const arrayOfStudents = [
    { name: 'zain', details: { age: 25, city: 'karachi' } },
    { name: 'bilal', details: { age: 30 } },
    { name: 'ahad', details: { city: 'karachi' } },
    { name: 'raza' }
];

// Loop through the array and access the potentially missing property using optional chaining
for (const obj of arrayOfStudents) {
    const city = obj?.details?.city;
    console.log(`${obj.name}'s city: ${city || 'Not available'}`);
}