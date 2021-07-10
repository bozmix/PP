var title = document.getElementById('title');
var length = document.getElementById('length');
var genre = document.getElementById('genre');
var errMessage = document.getElementsByClassName('error');
var moviesList = document.getElementById('films');
var createMovieButton = document.getElementById('createMovieButton');
var dateField = document.getElementById('date');
var dateError = document.getElementById('dateError');
var programs = document.getElementById('program');
var createProgramButton = document.getElementById('createProgramButton');
var moviesSelect = document.getElementById('movie');
var programSelect = document.getElementById('createdPrograms');
var buttonAddMovie = document.getElementById('AddMovieToProgram');


var index = 0;
var i = 0;
var programIndex = 0;
var movieIndex = 0;
moviesArray = new Movies;
programsArray = new Programs;


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
    moviesArray.addMovieToListOfMovies(movie);
    var result = movie.getData1();
    var li = document.createElement('li');
    var text = document.createTextNode(result);
    li.appendChild(text);
    moviesList.appendChild(li);

    var option = document.createElement('option');
    var text1 = document.createTextNode(result);
    option.appendChild(text1);
    option.setAttribute('id', 'movie-' + i);
    moviesSelect.appendChild(option);
    i++;

    title.value = '';
    length.value = '';
    genre.value = '';
}

function createProgram (){
    var err = '';
    if (!dateField.value){
        err = 'Please enter valid date to create program.';
        if (document.getElementById('errorMessage')){
            return
        } else {
            var d =document.createElement('p');
            var text = document.createTextNode(err);
            d.appendChild(text);
            d.setAttribute('id', 'errorMessage');
            dateError.appendChild(d);
            return
        }
    } else if (document.getElementById('errorMessage')) {
        var b = document.getElementById('errorMessage');
        dateError.removeChild(b);
    }

    var program = new Program(dateField.value);
    var output = program.getDate1();
    
    if (output.indexOf('NaN') !== -1){
        if (!document.getElementById('errorMessage')){
            err = 'Please enter valid date to create program.';
            var d =document.createElement('p');
            var text = document.createTextNode(err);
            d.appendChild(text);
            d.setAttribute('id', 'errorMessage');
            dateError.appendChild(d);
            dateField.value = '';
            return
        }
    }
    programsArray.addProgramToList(program);
    output = program.getData();
    var p = document.createElement('p');
    var text = document.createTextNode(output);
    p.appendChild(text);
    p.setAttribute('id', 'programNo-' + index);
    programs.appendChild(p);


    var option = document.createElement('option');
    var text1 = document.createTextNode(output);
    option.appendChild(text1);
    option.setAttribute('id', 'program-' + index);
    programSelect.appendChild(option);
    dateField.value = '';
    index++;
}

function addMovieToProgram (){
    var selectedProgram = programSelect.options[programSelect.selectedIndex].id;
    var selectedMovie = moviesSelect.options[moviesSelect.selectedIndex].id;
    if (!selectedProgram){
        programIndex = programIndex;
    } else {
        programIndex = parseInt(selectedProgram.split('')[selectedProgram.length-1]);
    }
    if (!selectedMovie){
        movieIndex = movieIndex;
    } else {
        movieIndex = parseInt(selectedMovie.split('')[selectedMovie.length-1]);
    }
    
    programsArray.listOfPrograms[programIndex].addMovieToProgram(moviesArray.list[movieIndex]);
   
    var oldProgramListItem = document.getElementById('program-' + programIndex);
    oldProgramListItem.textContent = programsArray.listOfPrograms[programIndex].getData();
   
    var oldProgramComplete = document.getElementById('programNo-' + programIndex);
    //console.log(programsArray.listOfPrograms[programIndex].getProgramData())
    oldProgramComplete.textContent = programsArray.listOfPrograms[programIndex].getData();

}

createMovieButton.addEventListener('click', createMovie);
createProgramButton.addEventListener('click', createProgram);
buttonAddMovie.addEventListener('click', addMovieToProgram);