const expect = require('chai').expect;
const generateGrid = require('./logic.js').generateGrid
const createGame = require('./logic.js').createGame
const generateRandomCoordinates = require('./logic.js').generateRandomCoordinates

describe('generateGrid', () => {
    it('is a function', () => {
        expect(generateGrid).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(generateGrid())).to.equal(true);
    });
    it('returns a 10x10 board when not given any input', () => {
        expect(generateGrid().length).to.equal(10);
    });
    it('returns a board as wide as we specify', () => {
        expect(generateGrid(10, 14).every(el => el.length === 10)).to.equal(true);
        expect(generateGrid(14, 9).every(el => el.length === 14)).to.equal(true);
    });
    it('returns a board as high as we specify', () => {
        expect(generateGrid(10, 14).length).to.equal(14);
        expect(generateGrid(15, 18).length).to.equal(18);
    });
    it('creates the correct size of board', () => {
        expect(generateGrid(10, 14).every(el => el.length === 10)).to.equal(true);
        expect(generateGrid(14, 10).length).to.equal(10);
    });
    it('each cell has an isShip boolean', () => {
        expect(generateGrid()[0][0]).to.haveOwnProperty("isShip")
        expect(generateGrid()[0][0].isShip).to.be.a("boolean")
    });
    it('each cell has an isDiscovered boolean', () => {
        expect(generateGrid()[0][0]).to.haveOwnProperty("isShip")
        expect(generateGrid()[0][0].isShip).to.be.a("boolean")
    });
});

describe('createGame', () => {

    const fakeGame = generateGrid()

    it('is a function', () => {
        expect(createGame).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(createGame())).to.equal(true);
    });
    it('returns a 10x10 grid when given no inputs', () => {
        expect(createGame().length).to.equal(10);
    });
    it('returns a grid with 5 ships when given no inputs', () => {
        expect(createGame().length).to.equal(10);
    });
    it('returns the right number of ships', () => {
        expect(createGame(fakeGame, )).to.equal(true);
    });
});

describe('generateRandomCoordinates', () => {
    it('is a function', () => {
        expect(generateRandomCoordinates).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(generateRandomCoordinates())).to.equal(true);
    });
    it('returns an array of length 2', () => {
        expect(generateRandomCoordinates().length).to.equal(2);
    });
    it('returns 2 numbers', () => {
        expect(generateRandomCoordinates()[0]).to.be.a('number')
        expect(generateRandomCoordinates()[1]).to.be.a('number')
    });
});