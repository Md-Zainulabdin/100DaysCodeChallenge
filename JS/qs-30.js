//  Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

// Regular function as a method
const obj1 = {
    name: 'Regular Function',
    regularFunction: function () {
        console.log(this.name); // 'Regular Function'
    }
};

// Arrow function as a method
const obj2 = {
    name: 'Arrow Function',
    arrowFunction: () => {
        console.log(this.name);
    }
};

obj1.regularFunction();
obj2.arrowFunction();

// Example of arrow function in a lexical scope
function outerFunction() {
    const arrowFunction = () => {
        console.log(this);
    };

    arrowFunction();
}

outerFunction();