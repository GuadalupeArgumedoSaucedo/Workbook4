"use strict"

//products page
let products = [
    {
        title:'Abbey Road',
        artist:'The Beatles',
        price: 30,
    
    },
    {
        title:'Lover',
        artist:'Taylor Swift',
        price: 40,
    
    },
    {
        title:'Appetite For Destruction',
        artist:'Guns n Roses',
        price: 15,
    
    },
    {
        title:'Awesome Mix, Vol. 2',
        artist:'Guardians of The Galaxy Vol. 2',
        price: 12
    
    },
    {
        title:'Thriller',
        artist:'Michael Jackson',
        price: 10
    
    },
    {
        title:'Un Verano Sin Ti',
        artist:'Bad Bunny',
        price: 20
    
    }
];

//ex below must type in individual item
//console.log(`${products[2].title} by ${products[2].artist} costs $${products[2].price}.`)

//only use 1 for all products
//parameter
function DisplayProduct(_product) {
    console.log(`${_product.title} by ${_product.artist} costs $${_product.price}.`)
};
//calling argument
DisplayProduct(products[2]);//


//other
let book1 = {
    title: "Eat that Frog",
    price: 19.95,
    displayInformation: function() {
        return `Title: ${this.title} and price ${this.price}`
    }
}
console.log(book1.displayInformation());//

//////////////////////////////////
let book = {
    title:'My book',
    price: 10.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log(combinedvalue);
    }
}

let book2 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log("The output is " + combinedvalue);
    }
}

let book3 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}

let book4 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}
book2.totalValue();//
book.totalValue();//

let book1total = book3.totalValue();
let book1tota2 = book4.totalValue();
console.log(book1total+ book1tota2);//