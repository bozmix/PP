/*
Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.
*/
function representProject(description, language, gitRepository, isInDevelopment){
    var project = {
        description: description,
        language: language,
        gitRepository: gitRepository,
        isInDevelopment: isInDevelopment,
        projectRepository: function (){
            console.log('git Repository link: ' + gitRepository);
        }(),
        isInJS: function(){
            if (language === 'JavaScript'){
            console.log(' Project is written in JavaScript. ');
            } else {
                console.log(" Project is not written in JavaScript. ")
            }
        }(),
        isInDev: function(){
            if (isInDevelopment == true){
                console.log(' Project is still in development. ');
            } else {
                console.log(' Project is finished. ')
            }
        }(),
    }
    return project;
}
var result = representProject("Creating object", "JavaScript", "github.com/bozmix/PP/objects/intro", true);
console.log(result);