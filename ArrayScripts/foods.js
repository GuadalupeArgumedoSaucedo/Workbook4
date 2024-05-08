let lunch = [ 
    {item: "Steak Fajitas", price: 9.95}, 
    {item: "Chips and Guacamole", price: 5.25}, 
    {item: "Sweet Tea", price: 2.79} 
  ]; 

  function getMealCost(lunch) { 
    let sum = 0; 
    for(let i = 0; i < lunch.length; i++) { 
       sum += lunch[i].price; 
    } 
  
    return sum; 
 } 

 mealSubtotal = getMealCost(lunch); 
 console.log("Subtotal: $"  + mealSubtotal.toFixed(2))

 mealTax = getMealCost(lunch) * .08
 console.log("Tax (8%): $"  + mealTax.toFixed(2))

 mealTip = getMealCost(lunch) * .18
 console.log("Tip (18%): $"  + mealTip.toFixed(2))

 mealTotal = mealSubtotal + mealTax + mealTip
 console.log("Total: $"  + mealTotal.toFixed(2))

