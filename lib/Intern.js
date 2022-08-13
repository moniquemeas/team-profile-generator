//import Employee class
const Employee = require('./Employee');

//create engineer object include employee class
class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        //get objects from employee constructor
        super (name, id, email);
        this.schoolName = schoolName;
    }
    //create getSchoolName()
    getSchoolName = function() {
        return this.schoolName;
    }
    
}
//export engineer
module.exports = Intern