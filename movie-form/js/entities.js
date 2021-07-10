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
        duration += parseInt(movie.length);
    })
    return duration;
}

Program.prototype.addMovieToProgram = function(movie){
    this.moviesList.push(movie);
}

Program.prototype.getData = function(){
    return  this.getDate1() + this.numberOfMovies() + ' movies, duration: ' + this.duration() + 'min.';
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
