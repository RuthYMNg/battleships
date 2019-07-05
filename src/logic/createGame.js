const generateGrid = require('./generateGrid.js');
const checkBoats = require('./checkBoats.js');
const updateGrid = require('./updateGrid.js');
const tryToPlace = require('./tryToPlace.js');

const createGame = function (gridA, gridB, boats) {

    if (!gridA || !gridA.length || gridA.length < 8 || gridA.some(row => row.length < 8)) {
        gridA = generateGrid();
    }
    if (!gridB || !gridB.length || gridB.length < 8 || gridB.some(row => row.length < 8)) {
        gridB = generateGrid();
    }

    boats = checkBoats(boats);

    // Player A

    boats.forEach(boat => {
        let go = true;
        while (go) {
            let result = tryToPlace(gridA, boat)
            if (!!result) {
                go = false;
                gridA = updateGrid(gridA, result);
            } 
        }
    });

    // Player B

    boats.forEach(boat => {
        let go = true;
        while (go) {
            let result = tryToPlace(gridB, boat)
            if (!!result) {
                go = false;
                gridB = updateGrid(gridB, result);
            } 
        }
    });

    return {
        playerA: gridA,
        playerB: gridB,
        boats: boats
    }
}

module.exports = createGame;