const Employee = require('../lib/Employee.js');

// Creates row in which profile cards will live
const rowTemplate = (contents => {
    `<section class="row justify-content-center">${contents}</section>`
});

// Creates profile card
function cardTemplate(user) {
    return `
    <section class="col">
        <section class="card">
            <section class="card-body">
                <h5 class="card-title">${Employee.getName()}</h5>
                    <p class="card-text">${Employee.getRole()}</p>
                    <p class="card-text">${Employee.getId()}</p>
                    <p class="card-text">Email: <a href="mailto:${Employee.getEmail()}">${Employee.getEmail()}</a></p>
                    <p class="card-text">${Employee.getGitHub()}</p>
                    <p class="card-text">${Employee.getSchool()}</p>
            </section>
        </section>
    </section>
    `
}
// Creates HTML page structure
function createHTML() {
        return `
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
          <section class="container">
          </section>
      </body>
          `;
      }

module.exports = {
    rowTemplate: rowTemplate,
    cardTemplate: cardTemplate,
    createHTML: createHTML
}