//  26 -> How can you clone an object in JavaScript
// and also give one example each deep copy, shallow copy, and reference copy

/*
Cloning an object can be a headache beacuse it is of reference type
*/

// shallow copy

const obj = {
    name: 'zain',
    age: 18,
    address: {
        city: 'karachi',
        country: 'PK'
    }
};

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, originalObject);

// Modify the shallow copy
shallowCopy.age = 31;
shallowCopy.address.city = 'Islamabad';

console.log(originalObject); // Original object is affected because the nested object is still a reference
console.log(shallowCopy);


// deep copy

const obj2 = {
    name: 'zain',
    age: 18,
    address: {
        city: 'karachi',
        country: 'PK'
    }
};


// Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modify the deep copy
deepCopy.age = 20;
deepCopy.address.city = 'Quetta';

console.log(originalObject); // Original object remains unchanged
console.log(deepCopy);



// reference copy

const obj3 = {
    name: 'zain',
    age: 18,
    address: {
        city: 'karachi',
        country: 'PK'
    }
};

// Reference copy
const referenceCopy = originalObject;

// Modify the reference copy
referenceCopy.age = 31;

console.log(originalObject); // Original object reflects changes
console.log(referenceCopy); 