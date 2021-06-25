function Movie(title, length, genre){
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.shortGenre = function(){

}

Movie.prototype.getData = function (){
    return this.title + ', ' + this.length + 'min, ' + this.shortGenre();
}