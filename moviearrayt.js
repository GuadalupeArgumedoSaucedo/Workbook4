const favoriteMovies = ["Catch me if you can", "The little Rascals", "Scream"];

function DisplayMovies(movieList){
//console.log(`${favoriteMovies[2]}, ${favoriteMovies[1]}, ${favoriteMovies[0]}`)
console.log(`${movieList[2]}, ${movieList[1]}, ${movieList[0]}`);
}

DisplayMovies(favoriteMovies);

//function DisplayMovie(favoriteMovies){
    //let reverseArray = favoriteMovies.reverse();
    //console.log(`The best three movies are: ${reverseArray}`);
//}

function displayAllMovies(movieList) {
    for (let i = 0; i < movieList.length; i++) {
        console.log(`You should watch "${movieList[i]}".`);
    }
}
displayAllMovies(favoriteMovies);