//  1-> Question: Reverse a string without using the built-in reverse() method.

function reverseStringMethod(str) {
    var reverseString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}
var result = reverseStringMethod("Hello World");
console.log("result:", result);
