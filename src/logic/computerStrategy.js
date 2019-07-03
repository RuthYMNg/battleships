const generateRandomCoordinates = require('./generateRandomCoordinates.js');

const computerStrategy = function (strategyData, grid) {
    console.log('**********ENTERING COMP STRATEGY***************');
    console.log(strategyData);
    if (strategyData.hitStreak) {
        console.log('There is a hitstreak...');
        let rand = Math.random();
        let direction = rand < 0.25 ? "up" : rand < 0.5 ? "right" : rand < 0.75 ? "down" : "left";
        console.log('...and the direction is ' + direction);
        // let direction = 'up';


        if (direction === 'up') {
            let x = strategyData.lastHit[0] - 1
            let y = strategyData.lastHit[1]
            if (strategyData.lastHit[1] === 0) {
                direction = 'right'
            } else if (!grid[y][x].isDiscovered) {
                if (grid[y][x].isShip) {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: [x, y],
                        lastTry: [x, y]
                    }
                } else {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: strategyData.lastHit,
                        lastTry: [x, y]
                    }
                }
            } else {
                direction = 'right'
            }
        }

        if (direction === 'right') {
            let x = strategyData.lastHit[0]
            let y = strategyData.lastHit[1] + 1
            if (strategyData.lastHit[0] === grid[0].length - 1) {
                direction = 'down'
            } else if (!grid[y][x].isDiscovered) {
                if (grid[y][x].isShip) {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: [x, y],
                        lastTry: [x, y]
                    }
                } else {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: strategyData.lastHit,
                        lastTry: [x, y]
                    }
                }
               
            }
            else {
                direction = 'down'
            }
        }

        if (direction === 'down') {
            let x = strategyData.lastHit[0] + 1
            let y = strategyData.lastHit[1]
            if (strategyData.lastHit[1] === grid.length - 1) {
                direction = 'left'
            } else if (!grid[y][x].isDiscovered) {
                if (grid[y][x].isShip) {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: [x, y],
                        lastTry: [x, y]
                    }
                } else {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: strategyData.lastHit,
                        lastTry: [x, y]
                    }
                }
               
            } else {
                direction = 'left'
            }
        }

        if (direction === 'left') {
            let x = strategyData.lastHit[0]
            let y = strategyData.lastHit[1] + 1
            if (strategyData.lastHit[0] === 0) {
                direction = 'up'
            } else if (!grid[y][x].isDiscovered) {
                if (grid[y][x].isShip) {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: [x, y],
                        lastTry: [x, y]
                    }
                } else {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: strategyData.lastHit,
                        lastTry: [x, y]
                    }
                }
               
            }
            else {
                direction = 'up'
            }
        }
        
        if (direction === 'up') {
            let x = strategyData.lastHit[0] - 1
            let y = strategyData.lastHit[1]
            if (strategyData.lastHit[1] === 0) {
                direction = 'right'
            } else if (!grid[y][x].isDiscovered) {
                if (grid[y][x].isShip) {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: [x, y],
                        lastTry: [x, y]
                    }
                } else {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: strategyData.lastHit,
                        lastTry: [x, y]
                    }
                }
            } else {
                direction = 'right'
            }
        }

        if (direction === 'right') {
            let x = strategyData.lastHit[0]
            let y = strategyData.lastHit[1] + 1
            if (strategyData.lastHit[0] === grid[0].length - 1) {
                direction = 'down'
            } else if (!grid[y][x].isDiscovered) {
                if (grid[y][x].isShip) {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: [x, y],
                        lastTry: [x, y]
                    }
                } else {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: strategyData.lastHit,
                        lastTry: [x, y]
                    }
                }
               
            }
            else {
                direction = 'down'
            }
        }

        if (direction === 'down') {
            let x = strategyData.lastHit[0] + 1
            let y = strategyData.lastHit[1]
            if (strategyData.lastHit[1] === grid.length - 1) {
                direction = 'left'
            } else if (!grid[y][x].isDiscovered) {
                if (grid[y][x].isShip) {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: [x, y],
                        lastTry: [x, y]
                    }
                } else {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: strategyData.lastHit,
                        lastTry: [x, y]
                    }
                }
               
            } else {
                direction = 'left'
            }
        }

        if (direction === 'left') {
            let x = strategyData.lastHit[0]
            let y = strategyData.lastHit[1] + 1
            if (strategyData.lastHit[0] === 0) {
                direction = 'up'
            } else if (!grid[y][x].isDiscovered) {
                if (grid[y][x].isShip) {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: [x, y],
                        lastTry: [x, y]
                    }
                } else {
                    return {
                        hitStreak: true,
                        diagonal: false,
                        lastHit: strategyData.lastHit,
                        lastTry: [x, y]
                    }
                }
               
            }
            else {
                direction = 'up'
            }
        }

        console.log('All full up so just going random');
        let go = true;
        let diagonalNextTime = Math.random() < 0.8
        while (go) {
            let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
            console.log(coordinates);
            if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
                go = false;
                return {
                    hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
                    diagonal: diagonalNextTime,
                    lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],   
                    lastTry: coordinates
                }
            }
        }

    } else if (strategyData.diagonal) {
        console.log('it is diagonal');
        console.log(grid.length, grid[0].length);
        if (
            strategyData.lastTry.some(el => el === 0) || 
            strategyData.lastTry.some(el => el === grid.length - 1) || 
            strategyData.lastTry.some(el => el === grid[0].length - 1)
        ) {
            console.log('diagonal but on the edge');
            //Revert to random
            let go = true;
            while (go) {
                let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
                if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
                    go = false;
                    return {
                        hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
                        diagonal: Math.random() < 0.7,
                        lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],   
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
            if(!grid[coordinates[0]][coordinates[1]].isDiscovered) {
                //Revert to random
                let go = true;
                while (go) {
                    let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
                    console.log('deep inside the diagonal function... coordinates are');
                    console.log(coordinates);
                    if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
                        go = false;
                        return {
                            hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
                            diagonal: Math.random() < 0.8,
                            lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],
                            lastTry: coordinates
                        }
                    }
                }
            }
            return {
                hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
                diagonal: Math.random() < 0.8,
                lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],   
                lastTry: coordinates
            }
            //SOMETHING NOT RIGHT AFTER THE LAST IF STATEMENT
        }
    } else {
        console.log('None of the above!');
        let go = true;
        let diagonalNextTime = Math.random() < 0.8
        while (go) {
            let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
            console.log(coordinates);
            if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
                go = false;
                return {
                    hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
                    diagonal: diagonalNextTime,
                    lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],   
                    lastTry: coordinates
                }
            }
        }
    }
}


module.exports = computerStrategy;