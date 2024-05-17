const favoriteMovies = ["Catch me if you can", "The little Rascals", "Scream"];

function DisplayMovies(movieList) {
    console.log(`${movieList[2]}, ${movieList[1]}, ${movieList[0]}`);
}

DisplayMovies(favoriteMovies);

console.log("--------------------------------------------------");

function displayAllMovies(movieList) {
    for (let i = 0; i < movieList.length; i++) {
        console.log(`You should watch "${movieList[i]}".`);
    }
}

displayAllMovies(favoriteMovies);

console.log("--------------------------------------------------");

// Function to display movies in reverse order
function displayMoviesInReverse(movieList) {
    const reverseArray = movieList.slice().reverse(); // Make a copy of the array and reverse it
    for (let i = 0; i < reverseArray.length; i++) {
        console.log(`You should watch "${reverseArray[i]}".`);
    }
}

displayMoviesInReverse(favoriteMovies);
