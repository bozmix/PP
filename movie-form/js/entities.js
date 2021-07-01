function Movie(title, length, genre){
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getShortGenre = function(){
    var result = ''; 
    var array = []; 
    array = this.genre.toUpperCase().split('');
    result = array[0] + array[array.length-1] + '';
    return result 
}

Movie.prototype.getData = function (){
    return this.title + ', ' + this.length + 'min, ' + this.getShortGenre();
}

function Program(date){
    this.date = new Date(date);
    this.moviesList = [];
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