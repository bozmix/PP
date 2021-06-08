/*
Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.
*/

function Movie (title, actors, director, genre, IMDB_popularity){
    this.title = title;
    this.actors = actors;
    this.director = director;
    this.genre = genre;
    this.IMDB = IMDB_popularity;
}

var TheLordOfTheRings = new Movie ('The Lord Of The Rings', 'Vigo Mortensen, Elijah Wood, Orlando Bloom, Liv Tyler, Cate Blanchet', 'Peter Jackson', 'Epic fantasy', 9.2);

console.log(TheLordOfTheRings);