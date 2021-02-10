const { expect, it, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

jest.mock('inquirer');

describe('Intern class', () => {
    test('Should return user input values', () => {
        const intern = new Intern('John Doe', 'jdoe@example.com', 123, 'jDoe123');
        expect(intern.name).toBe('John Doe');
        expect(intern.email).toBe('jdoe@example.com');
        expect(intern.id).toBe(123);
        expect(intern.username).toBe('jDoe123');
    });
});