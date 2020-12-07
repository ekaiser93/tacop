const assert = require('assert');
const { getGreatestCommonDivisor } = require('../chapter_1.js');

describe('getGreatestCommonDivisor', () => {
    it('it should return the correct output', () => {
        const actual = getGreatestCommonDivisor(10, 2);
        assert.strictEqual(actual, 2);
    });
    it('it should reverse m and n and then return the correct output when m < n', () => {
        const actual = getGreatestCommonDivisor(119, 544);
        assert.strictEqual(actual, 17);
    });
    it('it should fail if m or n is not a number', () => {
        assert.throws(() => { getGreatestCommonDivisor("fake", 2) }, Error, "Invalid inputs - m and n must be positive integers.");
    });
    it('it should fail if m or n is negative', () => {
        assert.throws(() => { getGreatestCommonDivisor(-9, 2) }, Error, "Invalid inputs - m and n must be positive integers.");
    });
    it('it should fail if m or n is greater than the max safe integer', () => {
        assert.throws(() => { getGreatestCommonDivisor(9007199254740992, 2) }, Error, "Invalid inputs - m and n must be safe integers.");
    });
});