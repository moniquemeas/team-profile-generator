//import Employee class
const Employee = require('./Employee');

//create engineer object include employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //get objects from employee constructor
        super (name, id, email);
        this.github = github;
    }
    //create getGithub()
    getGithub = function() {
        return this.github;
    }
    //create getRole()
    getRole = function(){
        return 'Engineer'
    }
}
//export engineer
module.exports = Engineer
