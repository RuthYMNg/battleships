const generateGrid = require('./generateGrid.js');
const checkBoats = require('./checkBoats.js');
const updateGrid = require('./updateGrid.js');
const tryToPlace = require('./tryToPlace.js');

const createGame = function (grid, boats) {

    if (!grid || !grid.length || grid.length < 10 || grid.some(row => row.length < 10)) {
        grid = generateGrid();
    }

    boats = checkBoats(boats);

    boats.forEach(boat => {
        let go = true;
        while (go) {
            let result = tryToPlace(grid, boat)
            if (!!result) {
                go = false;
                grid = updateGrid(grid, result);
            } 
        }
    });

    return {
        grid: grid,
        boats: boats
    }
}

module.exports = createGame;