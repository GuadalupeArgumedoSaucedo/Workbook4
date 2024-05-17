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
 ]; 
/*
 products.sort(function(a, b){ 
    if (a.item < b.item) return -1; 
    else if (a.item == b.item) return 0; 
    else return 1; 
}); 

let numProducts = products.length; 
for(let i = 0; i < numProducts; i++) { 
  console.log(products[i].item +  
              " $" + products[i].price.toFixed(2)); 
} 
*/

products.sort(function(a, b) {
    if (a.product < b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;
});

console.log("Sorted by product name:");
let numProducts1 = products.length;
for (let i = 0; i < numProducts1; i++) {
    console.log(products[i].product + " $" + products[i].price.toFixed(2));
}


console.log("--------------------------------------------------");


products.sort(function(a, b) {
    if (b.product < a.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;
});

console.log("Sorted by product name:");
let numProducts2 = products.length;
for (let i = 0; i < numProducts2; i++) {
    console.log(products[i].product + " $" + products[i].price.toFixed(2));
}