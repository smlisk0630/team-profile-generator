// Employee class
class Employee {

    constructor(name, email, id, office, school, username) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.office = office;
        this.school = school;
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
            case this.school:
                this.school;
                break;
            case this.username:
                this.username;
                break;
            default:
                console.log('Please enter the requested information.');
        }
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole(){
        return "Employee";
    };
    getOffice(){
        return this.office;
    }
    getSchool(){
        return this.school;
    }
};

module.exports = Employee;