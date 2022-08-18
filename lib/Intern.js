//import Employee class
const Employee = require('./Employee');

//create engineer object include employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        //get objects from employee constructor
        super (name, id, email);
        this.school = school;
    }
    //create getSchoolName()
    getSchoolName = function() {
        return this.school;
    }
    //create getRole()
    getRole = function(){
        return 'Intern';
    }
    
}
//export engineer
module.exports = Intern