var title = document.getElementById('title');
var length = document.getElementById('length');
var genre = document.getElementById('genre');
var errMessage = document.getElementsByClassName('error');
var moviesList = document.getElementById('films');
var createMovieButton = document.getElementById('createMovieButton');

function createMovie(){
    var err = '';
    errMessage[0].textContent='';
    if (!title.value){
        err = 'Please enter movie title.'
    }
    if (!length.value){
        err = 'Please enter movie length.'
    }
    if (!genre.value){
        err = 'Please select movie genre.'
    }
    if(err){
        var p = document.createElement('p');
        var message = document.createTextNode(err);
        p.appendChild(message);
        errMessage[0].appendChild(p);
        return    
    }

    var movie = new Movie(title.value, length.value, genre.value);
    var result = movie.getData();
    var li = document.createElement('li');
    var text = document.createTextNode(result);
    li.appendChild(text);
    moviesList.appendChild(li);

    title.value = '';
    length.value = '';
    genre.value = '';
}

createMovieButton.addEventListener('click', createMovie);