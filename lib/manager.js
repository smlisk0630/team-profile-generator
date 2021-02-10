const Employee = require('./Employee');

// Extends Employee class
// The Manager class displays the manager's name, email address, employee id, and office number
class Manager extends Employee {
    constructor(name, email, id, office) {
        super(name, email, id, office);
        this.name = name;
        this.email = email;
        this.id = id;
        this.office = office;
    }
}

module.exports = Manager;