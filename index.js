const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Templates = require('./src/templates');
const { createHTML, cardTemplate } = require("./src/templates");
const managerArray = [];
const teamArray = [];

// Inputs for manager prompts
function managerPrompts() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'id',
            validate: function (id) {
                if (id < 1) {
                    return "Please enter a positive integer greater than zero.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'office'
        },
    ])
        .then(managerRes => {
            const manager = new Manager(managerRes.name, managerRes.email, managerRes.id, managerRes.office);
            managerArray.push(manager);
            createTeam();
        });
}
// Team prompts
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Would you like to select an intern or an engineer?",
            name: 'employeeType',
            choices: ["Intern", "Engineer", "I don't want to add any more team members."]
        }
    ])
        .then(teamRes => {
            if (teamRes.employeeType === 'Intern') {
                internPrompts();
            } else if (teamRes.employeeType === 'Engineer') {
                engineerPrompts();
            } else {
                buildHTML();
            }
        });
}
// Engineer prompts
function engineerPrompts() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your engineer's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is your engineer's GitHub username?",
            name: 'github'
        },
    ])
        .then(teamRes => {
            const engineer = new Engineer(teamRes.name, teamRes.email, teamRes.id, teamRes.github);
            teamArray.push(engineer);
            createTeam();
        });
}
// Intern prompts
function internPrompts() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your intern's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is your intern's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is your intern's school?",
            name: 'school'
        },
    ])
        .then(teamRes => {
            const intern = new Intern(teamRes.name, teamRes.email, teamRes.id, teamRes.school);
            teamArray.push(intern);
            createTeam();
        });
}

managerPrompts();

// creates HTML file
function buildHTML() {
    const html = createHTML(teamArray,managerArray[0]);
    fs.writeFile("dist/index.html", html, (err) => {
        if (err) console.log(err);
        else console.log("success!");
    });
}