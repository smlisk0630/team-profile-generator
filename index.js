const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

// Inputs for the command line
const manager = inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'team'
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the team manager's email address?", 
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'office'
        },
        {
            type: 'input',
            message: "What type of team manager is this?",
            name: 'this'
        },
        {
            type: 'checkbox',
            message: "Would you like to select an intern or an engineer?",
            name: 'next-menu',
            choices: ["Intern", "Engineer"]
        },
    ])
    .then(response => {
        const content = `
        ${response.team}
        ${response.id}
        ${response.email}
        ${response.office}
        ${response.this}
        ${response.next-menu}
        `;

         // creates HTML file
         fs.writeFile('dist/index.html', content, err => {
            if (err) console.log(err);
            else console.log('success!');
        });
    });
    for(const prompt of manager){

    }