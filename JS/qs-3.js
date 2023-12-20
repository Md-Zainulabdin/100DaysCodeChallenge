// 3-> Question: Convert the first letter of each word in a sentence to uppercase.

const capitilize = (str) => {
    const splittedString = str.split(" ");
    const data = [];

    for (let i = 0; i < splittedString.length; i++) {
        data.push(splittedString[i].charAt(0).toUpperCase() + splittedString[i].slice(1))
    }

    return data.join(" ")
}

const result = capitilize("Convert the first letter of each word in a sentence to uppercase");
console.log("Capitilize String:", result);