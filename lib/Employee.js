//create class for employee
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id,
        this.email = email
    }
    //create function to get employee name
    getName = function(){
        return this.name;
    }
    //create function to get employee id
    getId = function(){
        return this.id;
    }
    //created function to get employee email
    getEmail = function() {
        return this.email;
    }
    getRole = function(){
        return 'Employee';
    }
}
//export Employee
module.exports = Employee;
