/*
Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.
*/

function Project (description, language, git_repository, isInDevelopment){
    this.description = description;
    this.language = language;
    this.repository = git_repository;
    this.development = isInDevelopment;

    this.printRepository = function (){
        return console.log(this.repository);
    }
    this.checkLanguage = function (){
        if (this.language === 'javascript'){
            return console.log('Project is written in JavaScript.');
        } else {
            return console.log('Project is not written in JavaScript');
        }
    }
    this.checkDevelopment = function (){
        if (this.development){
            return console.log('Project is stil in development');
        } else {
            return console.log('Project is finished');
        }
    }
}

var calculator = new Project ('program that perform basic calculations on numbers', 'javascript', 'github.com/bozmix/PP/objects/intro', true);
console.log(calculator);
calculator.checkDevelopment(); calculator.checkLanguage(); calculator.printRepository();