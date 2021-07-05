function Movie(title, length, genre){
    this.title = title;
    this.length = length;
    this.genre = genre;
}

function Movies(){
    this.list = [];
}

Movies.prototype.addMovieToListOfMovies = function(movie){
    this.list.push(movie);
}

Movie.prototype.getShortGenre = function(){
    var result = ''; 
    var array = []; 
    array = this.genre.toUpperCase().split('');
    result = array[0] + array[array.length-1] + '';
    return result 
}


Movie.prototype.getMovieFromListOfMovies = function (stringGetData){
    var array = stringGetData.split(',');
    var title = array[0];
    console.log(title);
}

Movie.prototype.getData = function (){
    return this.title + ', ' + this.length + 'min, ' + this.getShortGenre();
}

function Program(date){
    this.date = new Date(date);
    this.moviesList = [];
}

function Programs (){
    this.listOfPrograms = [];
}

Programs.prototype.addProgramToList = function(program){
    this.listOfPrograms.push(program);
}

Program.prototype.getDate1 = function(){
    return this.date.getDate() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear() + ', '
}

Program.prototype.numberOfMovies = function(){
    return this.moviesList.length
}

Program.prototype.duration = function(){
    var duration = 0;
    this.moviesList.forEach(function(movie){
        duration += movie.length;
    })
    return duration;
}

Program.prototype.addMovieToProgram = function(movie){
    this.moviesList.push(movie);
}

Program.prototype.getData = function(){
    return  this.getDate1() + this.numberOfMovies() + ' movies, duration: ' + this.duration() + 'min.';
}



var movie1 = new Movie ('Matrix', 15, 'Drama');
var movie2 = new Movie ('Superman', 12, 'Action');
var listOfMovies = new Movies;
listOfMovies.addMovieToListOfMovies(movie1);
listOfMovies.addMovieToListOfMovies(movie2);
//console.log(listOfMovies.list[1].title);

var program1 = new Program('Jun 30 2021');
var program2 = new Program('Jul 01 2021');
var listOfPrograms = new Programs;
listOfPrograms.addProgramToList(program1);
listOfPrograms.addProgramToList(program2);
console.log(listOfPrograms.listOfPrograms[0].moviesList);

program1.addMovieToProgram(movie1);
program1.addMovieToProgram(movie2);
console.log(listOfPrograms.listOfPrograms[0].moviesList[1].title);

//console.log(movie1, movie2);
//console.log(program1.getData() + '\n' + program2.getData());
//console.log(listOfPrograms);