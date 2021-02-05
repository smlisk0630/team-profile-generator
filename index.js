const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

// Inputs for the command line
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Who is your team member?',
            name: 'team'
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'email'
        },
    ])
    .then(response => {
        const content = ``;

         // creates HTML file
         fs.writeFile('index.html', content, err => {
            if (err) console.log(err);
            else console.log('success!');
        });
    });