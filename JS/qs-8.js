// 8-> Question: Sort the array in ascending and descending without built-in methods.
let arrayToSort = [9, 5, 7, 3, 8, 2, 1];

const sortInAscendingOrder = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
    }
    console.log(arrayToSort);
}

// sortInAscendingOrder(arrayToSort);


const sortInDescendingOrder = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
    }
    console.log(arr);
}

sortInDescendingOrder(arrayToSort)