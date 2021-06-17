
class Person {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary){
        super(name, surname)
        this.job = job
        this.salary = salary
    }
    getData(){
        return (this.name+' '+this.surname+' '+this.salary);
    }
    getSalary(){
        return console.log(this.salary);
    }
    increaseSalary(){
        this.salary *= 1.1;
        return this.salary; 
    }
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization){
        super(name, surname, job, salary)
        this.specialization = spacialization
    }
    getSpecialization(){
        return console.log(this.specialization);
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department){
        super(name, surname, job, salary)
        this.department = department
    }
    getDepartment(){
        return console.log(this.department);
    }
    changeDepartment(newDepartment){
        this.department = newDepartment;
        return this.department;
    }
}

var Pera = new Manager('Pera', 'Peric', 'Accountant', 100, 'Finances');
console.log(Pera.getData());
Pera.getSalary();
Pera.increaseSalary();
Pera.getSalary();
Pera.getDepartment();
Pera.changeDepartment('Service');
Pera.getDepartment();