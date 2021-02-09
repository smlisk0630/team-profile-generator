const Employee = require('./employee');

class teamMember extends Employee {
    constructor(name, email, id, username) {
        super(this.name, this.email, this.id, this.username)
    }
}

module.exports = teamMember;