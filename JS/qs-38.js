/*
*Advanced Sorting:*
   38 -> Sort an array of strings based on their lengths in ascending order.
    If two strings have the same length, maintain their relative order in the sorted array.
*/

const cars = ["Mercedes", "BMW", "Audii", "Maclaren", "Lamborghini", "Ford", "Rolls Royce", "Ferrari"];

const sortedCars = cars.sort((a, b) => {
    if (a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    } else {
        // If lengths are equal, maintain relative order
        return cars.indexOf(a) - cars.indexOf(b);
    }
});

console.log(sortedCars);