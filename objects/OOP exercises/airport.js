'use strict';

(function (){
    
    
    function Person (name, surname){
        if (!name || !surname){
            throw new Error ('Name and surname input is required');
        }
        this.name = name;
        this.surname = surname;
        this.getData = function(){
            return this.name + ' ' + this.surname;
        }
    }

    function Seat (number, category){
        
        category = category || 'e';
        number = number || Math.floor(Math.random()*91+10);
        if (category !== 'e' && category !== 'b'){
            throw new Error ('Invalid category input. Category may take \'e\' or \'b\' value.')
        }

       
        if (number > 100 || number < 10){
            throw new Error ("Invalid number of seat input. Number may be between 10 and 100.");
        }

        this.number = number;
        this.category = category;

        this.getData = function(){
            return this.number + ', ' + this.category.toUpperCase();
        }
    }

    function Passenger (person, seat){
        if(!person || !(person instanceof Person)){
            throw new Error('Invalid person input!')
        }
        if (!seat || !(seat instanceof Seat)){
            throw new Error ('Invalid seat input')
        }

        this.person = person;
        this.seat = seat;

        this.getData = function (){
            return this.seat.getData() + ', ' + this.person.getData()
        }
    }

    function Flight (date, relation){
        if (!date || !relation){
            throw new Error('Relation and date are required input!')
        }

        this.date = new Date(date);
        this.relation = relation;
        this.passengers = [];

        this.addPassenger = function(passenger){
            if (!passenger || !(passenger instanceof Passenger)){
                throw new Error('Invalid passenger input');
            }
            this.passengers.push(passenger)
        }

        this.numberOfPassengers = function(){
            return this.passengers.length
        }

        this.getData = function (){
            var result = '';
            result += '\t'+ this.date.getDate() + '.'+(this.date.getMonth()+1)+'.'+this.date.getFullYear()+', '+this.relation+'\n';
            this.passengers.forEach(function(passenger){
                result += '\t\t\t\t' + passenger.getData() + '\n';
            })
            return result;
        }
    }

    function Airport (){
        this.name = 'Nikola Tesla';
        this.flights = [];
        this.addFlight = function(flight){
            if (!flight || !(flight instanceof Flight)){
                throw new Error('Invalid input of flight');
            }

            this.flights.push(flight);
        }
        this.totalPassengers = function(){
            var result = 0;
            this.flights.forEach(function(flight){
               
                result += flight.numberOfPassengers();
                
            })
            return result
        }

        this.getData = function(){
            var result = '';
            result = 'Airport: ' + this.name + ', ' + 'total passengers: ' + this.totalPassengers() + '\n';
            this.flights.forEach(function(el){
                result += el.getData();
            })
            
            return result
        }
    }

    function createFlight(date, relation){
        var flight = new Flight(date, relation);
        return flight
    }

    function createPassenger(name, surname, seatNumber, seatCategory){
        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, seatCategory);
        var passenger = new Passenger(person, seat);
        return passenger
    }

    


    try {
        var konstatinVeliki = new Airport();
        var flight1 = createFlight('oct 25 2017', 'Belgrade - New York');
        var flight2 = createFlight('Nov 11 2017', 'Barcelona - Belgrade');
        var passenger1 = createPassenger('John', 'Snow', 10, 'b');
        var passenger2 = createPassenger('Cersei', 'Lanister', 20, 'b');
        var passenger3 = createPassenger('Deneris', 'Targarjen', 14);
        var passenger4 = createPassenger('Tirion', 'Lanister');
        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);
        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);
        konstatinVeliki.addFlight(flight1);
        konstatinVeliki.addFlight(flight2);
        console.log(konstatinVeliki.getData());
    } catch (error) {
        console.log(error.message);
    }

})();