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

var index = 0;
var i = 0;


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
    var output = program.getDate() + '.' + (program.getMonth()+1) + '.' + program.getFullYear() + '.';
    
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

    var li = document.createElement('li');
    var text = document.createTextNode(output);
    li.appendChild(text);
    li.setAttribute('id', 'programNo-' + index);
    index++;
    programs.appendChild(li);


    var option = document.createElement('option');
    var text1 = document.createTextNode(output);
    option.appendChild(text1);
    option.setAttribute('id', 'program-' + index);
    programSelect.appendChild(option);
    dateField.value = '';
}

createMovieButton.addEventListener('click', createMovie);
createProgramButton.addEventListener('click', createProgram);