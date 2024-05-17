let products = [ 
    {product: "Gummy Worms", price: 5.79}, 
    {product: "Plain M&Ms", price: 2.89}, 
    {product: "Peanut M&Ms", price: 2.89}, 
    {product: "Swedish Fish", price: 3.79}, 
    {product: "Sour Patch Kids", price: 4.99},
    {product: "Reese's", price: 3.49},
    {product: "Hershey's", price: 1.99},
    {product: "Jelly Beans", price: 6.49},
    {product: "Twizzlers", price: 2.69},
    {product: "Skittles", price: 2.29}
    // TODO:  fill the array with 10 candies of various 
    //        price ranges 
 ]; 



// Which candies costs less than $4.00? 
for (let i = 0; i < products.length; i++) {
    if (products[i].price < 4.00) {
        console.log(products[i].product + " - $" + products[i].price);
    }
}

console.log("--------------------------------------------------");

// Which candies has "M&M" its name? 
for (let i = 0; i < products.length; i++) {
    if (products[i].product.includes("M&M")) {
        console.log(products[i].product);
    }
}

console.log("--------------------------------------------------");

// Do we carry "Swedish Fish"? 
let hasSwedishFish = false;
for (let i = 0; i < products.length; i++) {
    if (products[i].product == "Swedish Fish") {
        hasSwedishFish = true;
        break;
    }
}
console.log(hasSwedishFish);