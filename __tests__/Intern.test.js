const { expect, it, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

jest.mock('inquirer');
// Should be teamMember class?
describe('Intern class', () => {
    test('Should return user input values', () => {
        const manager = new Intern('John Doe', 'jdoe@example.com', 123, 'jDoe123');
        expect(manager.name).toBe('John Doe');
        expect(manager.email).toBe('jdoe@example.com');
        expect(manager.id).toBe(123);
        expect(manager.username).toBe('jDoe123');
    });
});