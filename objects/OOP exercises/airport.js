'use strict';

(function (){
    
    
    function Person (name, surname){
        if (!name || !surname){
            throw new Error ('Name and surname input is required');
        }
        this.name = name;
        this.surname = surname;
    }

    function Seat (number, category){
        
        category = category || 'e';
        console.log(category);
//        if (!(['e', 'b'].includes(category))){
//            throw new Error ('Invalid category input. Category may take \'e\' or \'b\' value.');
//        }
        if (category != 'e' || category != 'b'){
            throw new Error ('Invalid category input. Category may take \'e\' or \'b\' value.')
        }

        if (!number){
            number = Math.floor(Math.random()*91+10)
        }
        if (number > 100 || number < 10 || typeof number !== 'number'){
            throw new Error ("Invalid number of seat input. Number may be between 10 and 100.");
        }

        this.number = number;
        this.category = category;
    }

    function Passenger (person, seat){
        this.person = person;
        this.seat = seat;
    }

    function Flight (relation, date, passengers){
        this.relation = relation;
        this.date = date;
        this.passengers = passengers;
    }

    function Airport (flights){
        this.name = 'Nikola Tesla';
        this.flights = flights;
    }






    try {
        var seat = new Seat(50,'b');
        var person2 = new Person('Janko', "Jankovic");
        console.log(seat);
    } catch (error) {
        console.log(error.message);
    }

})();