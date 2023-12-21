// 6->  Question: Find the index of the first occurrence of a specific element in an array.

const indexOfElement = (arr, targetElement) => {
    const index = arr.indexOf(targetElement);

    return index;
}

const array = ["Apple", "Mango", "Orange"];
const target = "Orange"

const result = indexOfElement(array, target);
console.log("result:", result);