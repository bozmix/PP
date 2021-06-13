function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype.getSpecialization = function () {
    return this.specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
var fejza = new Developer('Fejza', 'Fejzic', 'Pekar', 40000, 'dsada');
console.log(fejza);
