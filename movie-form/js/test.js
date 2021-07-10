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

Movie.prototype.getData1 = function (){
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

Program.prototype.getProgramData = function(){
    return  this.getDate1() + this.numberOfMovies() + ' movies, duration: ' + this.duration() + 'min.' + this.getMovies();
}

Program.prototype.getMovies = function (){
    var result = '';
    if (this.numberOfMovies() === 0){
        return  result
    }

    for (i = 0; i < this.moviesList.length; i++){
        result += '\n \t' + this.moviesList[i].getData1();
    }
    return result
}


var programId = 0;
var movie1 = new Movie ('Matrix', 15, 'Drama');
var movie2 = new Movie ('Superman', 12, 'Action');
var listOfMovies = new Movies;
listOfMovies.addMovieToListOfMovies(movie1);
listOfMovies.addMovieToListOfMovies(movie2);
//console.log(listOfMovies.list[1].title);

var program1 = new Program('Jun 30 2021');
var program2 = new Program('Jul 01 2021');
var programs = new Programs;
programs.addProgramToList(program1);
programs.addProgramToList(program2);

programs.listOfPrograms[0].addMovieToProgram(listOfMovies.list[0]);
programs.listOfPrograms[0].addMovieToProgram(listOfMovies.list[1]);
//console.log(programs.listOfPrograms[0].moviesList);

//programs[0].addMovieToProgram(movie2);
//console.log(listOfMovies.list[0])
console.log(programs.listOfPrograms[programId].getProgramData());
//console.log(programs.listOfPrograms[0].moviesList);
//console.log(programs.listOfPrograms[0].moviesList);
//console.log(programs.listOfPrograms[0].getData() + '\n' + programs.listOfPrograms[0].moviesList.forEach(function(movie){console.log('\t'+movie.getData())}));
//console.log(listOfPrograms.listOfPrograms);
//console.log(movie1, movie2);
//console.log(program1.getData() + '\n' + program2.getData());
//console.log(listOfPrograms);