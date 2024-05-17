// Array
const movies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 }
  ];
  // index for while loop
  let index = 0;
  // while loop processes the array
let amountOfMovies = movies.length;
console.log(`Movies: ${amountOfMovies}`);
  while (index < amountOfMovies) {
    const movie = movies[index];
    if (movie.year < 2000) { // Check if the movie was released before the year 2000
      console.log(`${movie.title} was released in ${movie.year}.`);
    }
    index++; //move to the next movie
  }

  console.log("--------------------------------------------------");

// Array
const books = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { title: "The Amazing Adventures of Kavalier & Clay", author: "Michael Chabon", year: 2000 },
  ];
  function checkPublicationCentury() {
    // index for the while loop
    let index = 0;
    // while loop processes the array
    while (index < books.length) {
      const book = books[index];
      if (book.year >= 2000) {
        console.log(`${book.title} by ${book.author} was published in the 21st century.`);
      } else {
        console.log(`${book.title} by ${book.author} was not published in the 21st century.`);
      }
      index++; //move to the next book
    }
  }
  // Call function
  checkPublicationCentury();




