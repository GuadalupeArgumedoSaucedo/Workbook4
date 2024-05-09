const favoriteMoies = ["Catch me if you can", "The little Rascals", "Scream"];

const favoriteMovies = [
    {
      movieTitle: "Catch me if you can",
      reasonWhy: "I like the thought of being rich",
      movieImageURL: "https://m.media-amazon.com/images/I/81V+b69u3xL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      movieTitle: "The little Rascals",
      reasonWhy: "It's a childhood favorite and I liked the idea of being able to run around and do whatever with no adults as a kid",
      movieImageURL: "https://upload.wikimedia.org/wikipedia/en/6/6f/Little_rascals_ver2.jpg"
    },
    {
      movieTitle: "Scream",
      reasonWhy: "It's one of the first moviess I saw that incorporated humor into horror",
      movieImageURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18852_p_v10_al.jpg"
    }
  ];
  
  //console.log(favoriteMovies);



//const index = Math.floor(Math.random() * names.length);
//document.getElementById("displayName").innerHTML = names[index];

  function pickRandomMovie() {
    let allMovies = Math.floor(Math.random() * favoriteMovies.length);
    let randomMovie = favoriteMovies[allMovies];

    return `You should watch "${randomMovie.movieTitle}" because ${randomMovie.reasonWhy}. Movie Poster here: ${randomMovie.movieImageURL}`;
}

console.log(pickRandomMovie());