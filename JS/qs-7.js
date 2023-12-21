// 7-> Question: Remove all duplicates from an array without built-in methods.

const removeDuplicates = (arr) => {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i])
        }
    }

    return uniqueArray;
}

const result = removeDuplicates([0, 5, 6, 8, 9, 0, 0]);
console.log("result:", result);