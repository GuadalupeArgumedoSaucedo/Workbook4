let favoriteMovies = [
    "Memoirs of a Geisha",
    "Training Day",
    "Princess and the Frog",
    "Spiderman",
    "Deadpool",
    "Avengers",
    "Forrest Gump",
    "The Help",
    "Barefoot",
    "The Conjuring",
    "Cars",
    "Grease",
    "Wreck-It Ralph",
    "Back to the Future",
    "Spirited Away",
    "The Shawshank Redemption",
    "The Green Mile",
    "Rollerball",
    "Planet of the Apes",
    "2001: A Space Odyssey",
    "How To Train Your Dragon",
    "Howl's Moving Castle",
    "Ponyo",
    "Catch Me If You Can",
    "The Little Rascals",
    "Scream",
    "Shrek 2",
    "Megamind",
    "Shrek",
    "The Interview",
    "The Proposal",
    "The Pursuit of Happyness",
    "The Longest Yard",
    "17 Again",
    "Rush Hour",
    "Athena",
    "The Pianist",
    "I feel Joker",
    "The Godfather",
    "The Mask",
    "Pan's Labyrinth",
    "Transformers",
    "Shrek 4"
];

function displayAllMovies(movieList) {
    for (let i = 0; i < movieList.length; i++) {
        console.log(`You should watch "${movieList[i]}".`);
    }
}
displayAllMovies(favoriteMovies);