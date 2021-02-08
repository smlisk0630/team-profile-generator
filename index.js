const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

// Inputs for the command line
inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your team member's name?",
            name: 'team'
        },
        {
            type: 'input',
            message: "What is your team member's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is your team member's email address?", 
            name: 'email'
        },
        {
            type: 'input',
            message: "What is your team member's office number?",
            name: 'office'
        },
        {
            type: 'input',
            message: "What type of team member is this?",
            name: 'this'
        },
    ])
    .then(response => {
        const content = `
        ${response.team}
        ${response.id}
        ${response.email}
        ${response.office}
        ${response.this}
        `;

         // creates HTML file
         fs.writeFile('index.html', content, err => {
            if (err) console.log(err);
            else console.log('success!');
        });
    });