const { expect, it } = require('@jest/globals');
const { describe } = require('yargs');
const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('response', () => {
        it('Should display Manager prompts for user input in terminal', () => {
            const result = Manager.response();
            expect(result).toEqual();
        });
    });
});