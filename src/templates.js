// Creates row in which profile cards will live
rowTemplate(contents => {
    `<section class="row justify-content-center">${contents}</section>`
});

// Creates profile card
function cardTemplate(user) {
    return `

    `
}
// Creates HTML page structure
function createHTML() {
    const starter = `
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
    `
}