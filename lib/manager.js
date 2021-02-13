const Employee = require('./Employee');

// Extends Employee class
// The Manager class displays the manager's name, email address, employee id, and office number
class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id, officeNumber);
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    };
}

module.exports = Manager;