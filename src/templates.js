const Employee = require('../lib/Employee.js');

// Creates manager card
function managerCardTemplate(manager) {
    return `
    <section class="row justify-content-center row-cols-1 row-cols-md-2 g-4">
        <section class="col">
            <section class="card text-center">
                <section class="card-header" style="background-color: purple; color: white">
                        <h5 class="card-title">${manager.getName()}</h5>
                </section>
                    <section class="card-body">
                        <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p class="card-text">ID: ${manager.getId()}</p>
                        <p class="card-text">Office Number: ${manager.getOffice()}</p>
                    </section>
            </section>
        </section>
    </section>
    `
}

// Creates intern card
function internCardTemplate(employee) {
    return `
    <section class="row justify-content-center row-cols-1 row-cols-md-2 g-4">
        <section class="col">
            <section class="card text-center">
                <section class="card-header" style="background-color: blue; color: white">
                    <h5 class="card-title">${employee.getName()}</h5>
                </section>
                    <section class="card-body">
                        <p class="card-text">${employee.getRole()}</p>
                        <p class="card-text">ID: ${employee.getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                        <p class="card-text">School: ${employee.getSchool()}</p>
                    </section>
            </section>
        </section>
    </section>
    `
}

// Creates engineer card
function engineerCardTemplate(employee) {
    return `
    <section class="row justify-content-center row-cols-1 row-cols-md-2 g-4">
        <section class="col">
            <section class="card text-center">
                <section class="card-header" style="background-color: blue; color: white">
                    <h5 class="card-title">${employee.getName()}</h5>
                </section>
                <section class="card-body">
                    <p class="card-text">${employee.getRole()}</p>
                    <p class="card-text">ID: ${employee.getId()}</p>
                    <p class="card-text">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <p class="card-text">GitHub Username: <a href="https://www.github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a></p>
                </section>
            </section>
        </section>
    </section>
    `
}

// Creates HTML page structure
function createHTML(teamArray,manager) {
        const header = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
              integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
          <title>Team Profiles</title>
      </head>
      <body>
          <header class="jumbotron bg-info text-white">
              <h1 class="text-center">My Team</h1>
          </header>
          <section class="container">`;
        let managerSection = managerCardTemplate(manager);
        let employeeSection = '';  
        const footer = `
          </section>
      </body>
          `;
        for (let index = 0; index < teamArray.length; index++) {
            const employee = teamArray[index];
            console.log(employee);
            let card = '';
            if(employee.getRole() === 'Intern') {
                card = internCardTemplate(employee);
            } else if(employee.getRole() === 'Engineer') {
                card = engineerCardTemplate(employee);
            }
            employeeSection += card;
        }
        return header+managerSection+employeeSection+footer;  
      }

module.exports = {
    //rowTemplate: rowTemplate,
    managerCardTemplate: managerCardTemplate,
    internCardTemplate: internCardTemplate,
    engineerCardTemplate: engineerCardTemplate,
    createHTML: createHTML
}