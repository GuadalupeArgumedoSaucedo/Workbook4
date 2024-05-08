let books = [
    {
        title: 'The Thief Lord',
        pages: 345,
        author: 'Cornelia Funke',
        genre: ['Fantasy', 'Adventure'],
        isbn: '978-0545227704',
        price: 19.95
    },
    {
        title: 'The Go-Giver',
        pages: 123,
        author: 'Bob Burg',
        genre: ['self help','psychology'],  // No genre provided; initialize with empty array
        isbn: '',    // No ISBN provided; initialize with an empty string
        price: 19.95
    }
];
console.log(books[0].title); 
console.log(books[1].author);
console.log(books[1].genre[1]);

//Temperal literal string `
console.log(`Genre of the first book: ${books[0].title} is ${books[0].genre[1]}`);

console.log(`$${books[0].price}`);