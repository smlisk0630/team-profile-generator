const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, username, school) {
        super(name, email, id, username, school)
        this.name = name;
        this.email = email;
        this.id = id;
        this.username = username;
        this.school = school;
    }
    getSchool() {
        return this.school;
    };
    getRole() {
        return "Intern";
    };
}

module.exports = Intern;