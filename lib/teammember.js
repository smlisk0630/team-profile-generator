const Employee = require('./Employee');

class teamMember extends Employee {
    constructor(name, email, id, username) {
        super(this.name, this.email, this.id, this.username)
        this.name = name;
        this.email = email;
        this.id = id;
        this.username = username;
    }
}

module.exports = teamMember;