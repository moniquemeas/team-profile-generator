const fs = require('fs');
const inquirer = require('inquirer')
//const generatePage = require('./src/page-template.js')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

const groupArr = [];

//manager input prompt
const inputManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message:"Please enter the manager's name!"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID!"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email!"
        },
        {
            type: "input",
            name:"officeNumber",
            message:"Please enter the manager's office number!"
        }
    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        groupArr.push(manager);
        console.log(manager);
    })
}

//add team member data
const addMember = () => {
    return inquirer.prompt ([
        {
            type:"list",
            name:"role",
            message: "Please choose your employee's role!",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message:"Please enter an employee's name!"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter an employee's ID!"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter an employee's email!"
        },
        {
            type: 'input',
            name:"github",
            message: "Please enter the employee's GitHub username!",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name:"school",
            message: "Please enter the employee's school!",
            when: (input) => input.role === "Intern",
        },
        {
            type: "confirm",
            name:"confirmAddMember",
            message: "Would you like to add more team members?",
            default: false
        }
    ])
    .then(employeeData => {

        let {name, id, email, role, github, school, confirmAddMember} = employeeData;
        let member;
        if (role === "Engineer") {
            member = new Engineer (name, id, email, github);
            
            console.log(member);

        } else if(role === "Intern"){
            member = new Intern (name, id, email, school);
            console.log(member);
        }
        groupArr.push(member);

        if (confirmAddMember) {
            return addMember(groupArr);
        } else {
            return groupArr;
        }

    })
};

//create HTML Page

const writeFile = data => {
fs.writeFile('./dist/index.html', data, err => {
   if (err) throw err;
    
   console.log('Check out index.html');

fs.copyFile('./src/style.css', './dist/style.css', err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Style sheet copied successfully!');
})
})
};

inputManager()
.then(addMember)
.then(groupArr => {
    return generatePage(groupArr);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return fs.copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
console.log(err);
});