const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, email, id, office) {
        super(this.name, this.email, this.id, this.office)
    }
}

module.exports = Manager;