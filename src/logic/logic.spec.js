const expect = require('chai').expect;
const generator = require('./logic.js').generator

describe('generator', () => {
    it('is a function', () => {
        expect(generator).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(generator())).to.equal(true);
    });
    it('returns a 10x10 board when not given any input', () => {
        expect(generator().length).to.equal(10);
    });
    it('returns a board as wide as we specify', () => {
        expect(generator(2, 1).every(el => el.length === 2)).to.equal(true);
        expect(generator(5, 4).every(el => el.length === 5)).to.equal(true);
    });
    it('returns a board as high as we specify', () => {
        expect(generator(1, 2).length).to.equal(2);
        expect(generator(5, 4).length).to.equal(4);
    });
    it('creates the correct size of board', () => {
        expect(generator(5, 4).every(el => el.length === 5)).to.equal(true);
        expect(generator(5, 4).length).to.equal(4);
    });
    it('each cell has an isShip boolean', () => {
        expect(generator()[0][0]).to.haveOwnProperty("isShip")
        expect(generator()[0][0].isShip).to.be.a("boolean")
    });
    it('each cell has an isDiscovered boolean', () => {
        expect(generator()[0][0]).to.haveOwnProperty("isShip")
        expect(generator()[0][0].isShip).to.be.a("boolean")
    });
});