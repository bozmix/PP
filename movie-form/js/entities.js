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
    return this.date
}

Program.prototype.numberOfMovies = function(moviesList){
    var count = 0;
    moviesList.forEach(function(){
        count ++
    })
    return count
}

Program.prototype.duration = function(moviesList){
    var duration = 0;
    moviesList.forEach(function(movie){
        duration += movie.length;
    })
    return duration;
}