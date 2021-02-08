const { expect, it } = require('@jest/globals');
const { describe } = require('yargs');
const ind = require('../index');

describe('index', () => {
    describe('response', () => {
        it('should display prompts for user input in terminal', () => {
            const result = ind.response();
            expect(result).toEqual();
        });
    });
});