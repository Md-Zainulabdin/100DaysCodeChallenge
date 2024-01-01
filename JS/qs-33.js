/*Sorting Objects:*
   32 -> Q: Given an array of objects with a 'price' property, use the sort method to arrange 
   them in descending order based on their prices.*/

const products = [
    {
        name: "Iphone", price: 5000, currency: "USD",
    }, {
        name: "Macbook", price: 11000, currency: "USD",
    }, {
        name: "Airpods", price: 1200, currency: "USD",
    }, {
        name: "Ipad", price: 3000, currency: "USD",
    }, {
        name: "IWatch", price: 800, currency: "USD",
    }
]

const sortedProducts = products.sort((a, b) => b.price - a.price);
console.log("sorted Products:", sortedProducts);