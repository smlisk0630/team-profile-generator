const { expect, it, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

jest.mock('inquirer');

describe('Manager class', () => {
    test('Should return user input values', () => {
        const manager = new Manager('John Doe', 'jdoe@example.com', 123, 'Main 223');
        expect(manager.name).toBe('John Doe');
        expect(manager.email).toBe('jdoe@example.com');
        expect(manager.id).toBe(123);
        expect(manager.office).toBe('Main 223');
    });
});