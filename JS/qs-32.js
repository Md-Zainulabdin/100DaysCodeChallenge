/*2. *Filter and Map Combination:*
   32 -> Q: Take an array of strings, filter out the ones with a length less than 5,
    and then capitalize the remaining strings using the map method.*/

const cars = ["mercedes", "lamborghini", "audi", "bmw", "porche", "rolls royce"];
let filteredArray = cars.filter((item) => item.length <= 5);

let capitalizeArray = cars.map((item) => {
    if (filteredArray.includes(item)) {
        return item
    }

    return `${item.charAt(0).toUpperCase()}${item.slice(1)}`
});

console.log(capitalizeArray);