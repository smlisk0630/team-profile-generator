const { tsConstructorType } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./Employee');
const Manager = require('./Manager');
const TeamMember = require('./Teammember');


const manager = new Manager(this.name, this.email, this.id, this.office);
const engineer = new teamMember(this.name, this.email, this.id, this.username);
const intern = new teamMember(this.name, this.email, this.id, this.username);

// Inputs for manager prompts
const manager = inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
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
    ])
// Inputs for team prompts
const team = inquirer
    .prompt([
        {
            type: 'checkbox',
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
    .then(response => {
        const content = `
        Please build your team.
        ${response.name}
        ${response.id}
        if(${response.id}<1) {
            Please enter a positive integer great than zero.
        } else
        ${response.email}
        ${response.office}
        ${response.this}
        ${response.next - menu}
        `;

        // creates HTML file
        fs.writeFile('dist/index.html', content, err => {
            if (err) console.log(err);
            else console.log('success!');
        });
    });
    // for(const prompt of manager){

    // }