const expect = require('chai').expect;
const generateGrid = require('./logic.js').generateGrid
const createGame = require('./logic.js').createGame
const generateRandomCoordinates = require('./logic.js').generateRandomCoordinates
const checkBoats = require('./logic.js').checkBoats
const updateGrid = require('./logic.js').updateGrid

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

    const boats = [
        {
            name: "Carrier",
            length: 5
        },
        {
            name: "Submarine",
            length: 3
        },
        {
            name: "Destroyer",
            length: 2
        },
    ]

    it('is a function', () => {
        expect(createGame).to.be.a('function');
    });
    it('returns an object', () => {
        expect(typeof createGame()).to.equal('object');
    });
    it('returns a 10x10 grid when given no inputs', () => {
        expect(createGame().grid.length).to.equal(10);
    });
    it('returns a 10x10 grid if the grid is too small', () => {
        expect(createGame([[[], [], [], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], [], [], []]]).grid.length).to.equal(10);
        expect(createGame([[], [], [], [], [], [], [], [], [], []]).grid.length).to.equal(10);
    });
    it('returns a grid with 5 ships when given no inputs', () => {
        expect(createGame().boats.length).to.equal(5);
    });
    it('returns the right number of ships', () => {
        expect(createGame(fakeGame, boats).boats.length).to.equal(3);
    });
    it('creates a grid which matches the ships', () => {
        const game = createGame(fakeGame, boats);
        const countOfBoats = boats.reduce((acc, boat) => {
            return acc + boat.length;
        }, 0)
        const countInGrid = game.grid.reduce((acc, row) => {
            return acc + row.reduce((acc2, cell) => {
                return cell.isShip ? acc2 + 1 : acc2;
            }, 0);
        }, 0);
        expect(countOfBoats === countInGrid).to.equal(true);
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

describe('checkBoats', () => {
    it('is a function', () => {
        expect(checkBoats).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(checkBoats())).to.equal(true);
    });
    it('returns an array of objects', () => {
        expect(checkBoats().every(boat => typeof boat === 'object')).to.equal(true);
    });
    it('returns standard boats if some boat does not have length', () => {
        const shortBoat = [
            {
                length: 0
            }
        ];
        const invisiboat = [
            {}
        ];
        const shortBoatInGroup = [
            {
                length: 2
            },
            {
                length: 5
            },
            {
                length: 0
            }
        ];
        expect(checkBoats(shortBoat).every(boat => boat.length)).to.equal(true);
        expect(checkBoats(invisiboat).every(boat => boat.length)).to.equal(true);
        expect(checkBoats(shortBoatInGroup).every(boat => boat.length)).to.equal(true);
        expect(checkBoats().every(boat => boat.length)).to.equal(true);
    });
    it('returns standard boats if some boat is too short', () => {
        const shortBoat = [
            {
                length: 1
            }
        ];
        const shortBoatInGroup = [
            {
                length: 2
            },
            {
                length: 5
            },
            {
                length: 1
            }
        ];
        expect(checkBoats(shortBoat).every(boat => boat.length > 1)).to.equal(true);
        expect(checkBoats(shortBoatInGroup).every(boat => boat.length > 1)).to.equal(true);
        expect(checkBoats().every(boat => boat.length > 1)).to.equal(true);
    });
    it('returns standard boats if some boat is too long', () => {
        const longBoat = [
            {
                length: 7
            }
        ];
        const niceBoat = [
            {
                length: 6
            }
        ];
        const longBoatInGroup = [
            {
                length: 2
            },
            {
                length: 7
            },
            {
                length: 1
            }
        ];
        expect(checkBoats(longBoat).every(boat => boat.length < 7)).to.equal(true);
        expect(checkBoats(longBoatInGroup).every(boat => boat.length < 7)).to.equal(true);
        expect(checkBoats(niceBoat).every(boat => boat.length < 7)).to.equal(true);
        expect(checkBoats().every(boat => boat.length < 7)).to.equal(true);
    });
    it('returns standard boats if there are too many boats', () => {
        const lotsOfBoats = [
            {
                length: 2
            },
            {
                length: 6
            },
            {
                length: 4
            },
            {
                length: 5
            },
            {
                length: 3
            },
            {
                length: 3
            },
            {
                length: 3
            },
            {
                length: 3
            },
            {
                length: 2
            }
        ];
        expect(checkBoats(lotsOfBoats).length < 8).to.equal(true);
    });
});