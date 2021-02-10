const { expect, it, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

jest.mock('inquirer');

describe('Engineer class', () => {
    test('Should return user input values', () => {
        const engineer = new Engineer('John Doe', 'jdoe@example.com', 123, 'jDoe123');
        expect(engineer.name).toBe('John Doe');
        expect(engineer.email).toBe('jdoe@example.com');
        expect(engineer.id).toBe(123);
        expect(engineer.username).toBe('jDoe123');
    });
});