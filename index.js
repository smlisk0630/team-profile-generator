const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const manager = new Manager(this.name, this.email, this.id, this.office);
const engineer = new Engineer(this.name, this.email, this.id, this.username);
const intern = new Intern(this.name, this.email, this.id, this.username);

// Inputs for manager prompts
const managerPrompts = inquirer
    .prompt([
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
            validate: function (managerResponse) {
                if (managerResponse.id < 1) {
                    return "Please enter a positive integer great than zero.";
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
    // Inputs for team prompts

    .then(managerResponse => {
        const teamPrompts = inquirer
            .prompt([
                {
                    type: 'list',
                    message: "Would you like to select an intern or an engineer?",
                    name: 'next-menu',
                    choices: ["Intern", "Engineer", "I don't want to add any more team members."]
                },
                {
                    type: 'input',
                    message: "What is your [team member's] name?",
                    name: 'team'
                },
                {
                    type: 'input',
                    message: "What is your [team member's] id?",
                    name: 'id'
                },
                {
                    type: 'input',
                    message: "What is your [team member's] email?",
                    name: 'email'
                },
                {
                    type: 'input',
                    message: "What is your [team member's] GitHub username?",
                    name: 'office'
                },
                {
                    type: 'input',
                    message: "What type of team manager is this?",
                    name: 'this'
                },
            ])
            .then(teamResponse => {
                const content = `
        ${managerResponse.name}
        ${managerResponse.id}
        ${managerResponse.id}
        ${managerResponse.email}
        ${managerResponse.office}
        `;
                // ${response.this}
                // ${response.next - menu}

                // creates HTML file
                fs.writeFile('dist/index.html', content, err => {
                    if (err) console.log(err);
                    else console.log('success!');
                });
                console.log(managerResponse);
            });
    });
    // for(const prompt of manager){

    // }