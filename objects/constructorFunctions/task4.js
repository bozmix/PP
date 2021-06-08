/*
Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.
*/
function Recipe (name, cuisine, complexity, ingredients, time, instruction){
    
    this.name = name;
    this.typeOfCuisine = cuisine;
    this.complexity = complexity;
    this.ingredients = ingredients;
    this.preparingTime = time;
    this.preparingInstruction = instruction;
    this.mealIngredients = function () {
        return console.log(ingredients);
    };
    this.timeOfPreparing = function (){
        return time <= 15 ? console.log("Can be prepared in 15 minutes") : console.log("Can\'t be prepared in 15 minutes");
    };
    this.changeCuisine = function (newCuisine){
        cuisine = newCuisine;
        this.typeOfCuisine = cuisine;
        return console.log(this.typeOfCuisine);
    };
    this.deleteIngredient = function (ingredient){
        var newIngredients = [];
        var j = 0;
        for (var i = 0; i < ingredients.length; i++){
            if (ingredient !== ingredients[i]){
                newIngredients[j] = ingredients[i];
                j++;
            } else {
                continue;
            }
        }
        this.ingredients = newIngredients;
        return console.log(newIngredients);
    };
    
}

var sarma = new Recipe ("sarma","serbian",5,['kupus', 'meso', 'rebarca', 'pirinac', 'slanina', 'lovorov list', 'biber', 'so', 'mast'], 240, 'Pripremiti pirinac u tiganju, zatim dodati i izmesati sa mlevenim mesom i zacinima po ukusu. Smesu zamotati u listove kiselog kupusa i tako zavijene sarme redjati u posudu u kojoj ce se kuvati. U posudu sipati vode, masti, lovorov list, biber i dodati suva rebarca. Kuvati na 180 stepeni najmanje 2 sata.');

//sarma.mealIngredients();                 //prints needed ingredients when uncommented
//sarma.timeOfPreparing();                 //checks if needed time of preparing is within 15 minutes
//console.log(sarma.typeOfCuisine);        //prints type of cuisine
//sarma.changeCuisine("hungarian");        //change the type of cuisine
//console.log(sarma.typeOfCuisine);        //prints new (changed) type of cuisine
//console.log(sarma.ingredients);            //prints needed ingredients
//sarma.deleteIngredient('kupus');           //delete given ingredient and prints new list of needed ingredients

//console.log(sarma instanceof Recipe);        //checks if the meal is made from our constructor function