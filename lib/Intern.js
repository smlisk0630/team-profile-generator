const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, username) {
        super(name, email, id, username)
        this.name = name;
        this.email = email;
        this.id = id;
        this.username = username;
    }
}

module.exports = Intern;