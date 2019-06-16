const generateRandomCoordinates = require('./generateRandomCoordinates.js');

const computerStrategy = function (strategyData, grid) {
    console.log(strategyData);
    if (strategyData.hitStreak) {
        
    } else if (strategyData.diagonal) {
        console.log('it is diagonal');
        console.log(strategyData);
        console.log(grid.length, grid[0].length);
        if (strategyData.lastTry.some(el => el === 0) || strategyData.lastTry.some(el => el === grid.length - 1) || strategyData.lastTry.some(el => el === grid[0].length - 1)) {
            console.log('diagonal but on the edge');
            //Revert to random
            let go = true;
            while (go) {
                let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
                if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
                    go = false;
                    return {
                        hitStreak: false,
                        diagonal: Math.random() < 0.7,
                        lastHit: [],
                        lastTry: coordinates
                    }
                }
            }
        } else {
            const up = Math.random() < 0.5;
            const right = Math.random() < 0.5;
            let coordinates = [strategyData.lastTry[0], strategyData.lastTry[1]]
            if (up && right) {
                coordinates = [strategyData.lastTry[0] - 1, strategyData.lastTry[1] + 1]
            } else if (up && !right) {
                coordinates = [strategyData.lastTry[0] - 1, strategyData.lastTry[1] - 1]
            } else if (!up && !right) {
                coordinates = [strategyData.lastTry[0] + 1, strategyData.lastTry[1] - 1]
            } else {
                coordinates = [strategyData.lastTry[0] + 1, strategyData.lastTry[1] + 1]
            }
            if(grid[strategyData.lastTry[0]][strategyData.lastTry[1]].isDiscovered) {
                //Revert to random
                let go = true;
                let diagonalNextTime = Math.random() < 0.8
                while (go) {
                    let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
                    console.log(coordinates);
                    if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
                        go = false;
                        return {
                            hitStreak: false,
                            diagonal: diagonalNextTime,
                            lastHit: [],
                            lastTry: coordinates
                        }
                    }
                }
            }
            return {
                hitStreak: false,
                diagonal: Math.random() < 0.8,
                lastHit: [],
                lastTry: coordinates
            }
        }
        console.log(2);
    } else {
        console.log(3);
        let go = true;
        let diagonalNextTime = Math.random() < 0.8
        while (go) {
            let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
            console.log(coordinates);
            if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
                go = false;
                return {
                    hitStreak: false,
                    diagonal: diagonalNextTime,
                    lastHit: [],
                    lastTry: coordinates
                }
            }
        }
    }
}


module.exports = computerStrategy;