/*
23 -> Explain the concept of "closures" in JavaScript and provide an example of their practical use.
*/

/*
Closures is the most important topic in JavaScript which often ask in interviews 

Let see what closure is with a practical example..

Suppose that we have a function which we named as a parent function. This function is returning an another function that is a child function if this returning function use any variable
 of parent function or inside that scope so this phenomenon is called closure in JavaScript
*/

function parent() {
    let name = "zain";

    return function () {
        console.log(name);
    }
}

parent()();