//import Employee class
const Employee = require('./Employee');

//create engineer object include employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //get objects from employee constructor
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    //create getOfficeNumber()
    getOfficeNumber = function() {
        return this.officeNumber;
    }
    //create getRole()
    getRole = function(){
        return 'Manager'
    }
}
//export engineer
module.exports = Manager
