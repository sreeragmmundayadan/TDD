const assert = require('assert');

const StringCalculator = require('./tdd');

describe('String calculator', () => {
    beforeEach(() => {
        this.stringCalc = new StringCalculator();
    });

    it('Calculate empty string', () => {
        assert.strictEqual(this.stringCalc.calculate(''), 0);
    });

    it('Calculate simple string with one element', () => {
        assert.strictEqual(this.stringCalc.calculate('1'), 1);
    });

    it('Calculate simple string with one element 2', () => {
        assert.strictEqual(this.stringCalc.calculate('9'), 9);
    });

    it('Calculate simple string with two elements', () => {
        assert.strictEqual(this.stringCalc.calculate('1,0'), 1);
    });

    it('Calculate simple string with two elements 2', () => {
        assert.strictEqual(this.stringCalc.calculate('1,133'), 134);
    });

    it('Calculate simple string with 3 elements ', () => {
        assert.strictEqual(this.stringCalc.calculate('5,6,7'), 18);
    });

    it('Calculate simple string with "\\n" delimiter ', () => {
        assert.strictEqual(this.stringCalc.calculate('5\n6\n7', '\n'), 18);
    });

    it('Calculate simple string with ";" delimiter ', () => {
        assert.strictEqual(this.stringCalc.calculate('5;6;7', ';'), 18);
    });

    it('String with negative numbers return exceptions', () => {
        const exercise = () => this.stringCalc.calculate('-5;6;7', ';');
        assert.throws(exercise, new Error('negatives not allowed!'));
    });

    it('String with 2 negatives numbers return exceptions', () => {
        const exercise = () => this.stringCalc.calculate('-5;-6;7', ';');
        assert.throws(exercise, new Error('negatives not allowed!'));
    });
});
