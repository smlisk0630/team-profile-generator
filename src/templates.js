const Employee = require('../lib/Employee.js');

// Creates row in which profile cards will live
const rowTemplate = (contents => {
    `<section class="row justify-content-center">${contents}</section>`
});

// Creates profile card
// function cardTemplate(employee) {
//     return `
//     <section class="col">
//         <section class="card">
//             <section class="card-body">
//                 <h5 class="card-title">${employee.getName()}</h5>
//                     <p class="card-text">${employee.getRole()}</p>
//                     <p class="card-text">${employee.getId()}</p>
//                     <p class="card-text">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
//                     <p class="card-text">${employee.getGitHub()}</p>
//                     <p class="card-text">${employee.getSchool()}</p>
//             </section>
//         </section>
//     </section>
//     `
// }

// Creates intern card
function internCardTemplate(employee) {
    return `
    <section class="col">
        <section class="card">
            <section class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                    <p class="card-text">${employee.getRole()}</p>
                    <p class="card-text">${employee.getId()}</p>
                    <p class="card-text">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <p class="card-text">${employee.getSchool()}</p>
            </section>
        </section>
    </section>
    `
}

// Creates engineer card
function engineerCardTemplate(employee) {
    return `
    <section class="col">
        <section class="card">
            <section class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                    <p class="card-text">${employee.getRole()}</p>
                    <p class="card-text">${employee.getId()}</p>
                    <p class="card-text">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <p class="card-text">${employee.getGitHub()}</p>
            </section>
        </section>
    </section>
    `
}

// Creates manager card
function managerCardTemplate(manager) {
    return `
    <section class="col">
        <section class="card">
            <section class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
                    <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                    <p class="card-text">${manager.getId()}</p>
                    <p class="card-text">${manager.getOffice()}</p>
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
          <header class="jumbotron">
              <h1>My Team</h1>
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
            let card = '';
            if(employee.getRole() === 'Intern') {
                card = internCardTemplate(employee);
            } else if(employee.getRole() === 'Engineer') {
                card = engineerCardTemplate(employee);
            }
            employeeSection += card;
            console.log(card);
        }
        console.log(employeeSection);
        return header+managerSection+employeeSection+footer;  
      }


module.exports = {
    rowTemplate: rowTemplate,
    managerCardTemplate: managerCardTemplate,
    internCardTemplate: internCardTemplate,
    engineerCardTemplate: engineerCardTemplate,
    createHTML: createHTML
}