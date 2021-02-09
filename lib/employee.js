// Employee class
class Employee {

    constructor(name, email, id, office, username) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.office = office;
        this.username = username;
    }
    // Accepts a manager's input
    managerInput(userInput) {
        switch (userInput) {
            case this.name:
                this.name;
                break;
            case this.email:
                this.email;
                break;
            case this.id:
                this.id;
                break;
            case this.office:
                this.office;
                break;
            default:
                console.log('Please enter the requested information.');
        }
    }
    // Accepts an employee's input
    employeeInput(userInput) {
        switch (userInput) {
            case this.name:
                this.name;
                break;
            case this.email:
                this.email;
                break;
            case this.id:
                this.id;
                break;
            case this.username:
                this.username;
                break;
            default:
                console.log('Please enter the requested information.');
        }
    }
};

module.exports = Employee;