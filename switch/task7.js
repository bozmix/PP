/*Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.*/

var city = "Madrid";

switch (city) {
    case "New York":
    case "Chicago":
    case "Orlando":
    case "Los Angeles":
    case "Sacramento":
        console.log("USA");
        break;
    case "Moskva":
    case "Leningrad":
    case "Novgorod":
        console.log("Russia");
        break;
    case "Berlin":
    case "Bon":
    case "Leipzig":
    case "Frankfurt":
        console.log("Germany");
        break;
    case "Paris":
    case "Nice":
        console.log("France");
        break;
    case "Belgrade":
        console.log("Serbia");
        break;
    default:
        console.log("Please choose a different city");
        break;        
}