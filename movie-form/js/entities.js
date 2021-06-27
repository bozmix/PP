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
    return this.date.getDate() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear() + '.';
}


