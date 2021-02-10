const { expect, it, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

jest.mock('inquirer');

describe('Employee class', () => {
    test('Should return user input values', () => {
        const employee = new Employee('John Doe', 'jdoe@example.com', 123, 'Main 223', 'jDoe123');
        expect(employee.name).toBe('John Doe');
        expect(employee.email).toBe('jdoe@example.com');
        expect(employee.id).toBe(123);
        expect(employee.office).toBe('Main 223');
        expect(employee.username).toBe('jDoe123');
    });
});