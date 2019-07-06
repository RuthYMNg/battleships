const generateRandomCoordinates = require('./generateRandomCoordinates.js');
const getStrategy = require('./getStrategy.js');

const format = {
    next: [],
    strategyPlan: [],
    lastTry: []
}

const computerStrategy = function (inputStrategy, grid) {
    let strategy = Object.assign(inputStrategy)
    console.log(strategy);
    console.log('**********ENTERING COMP STRATEGY***************');

    if (strategy.next.length) {
        console.log('Trying next priority');
        let keepGoing = true;
        while (keepGoing && strategy.next.length) {
            console.log('Next while');
            if (
                strategy.next[0][0] >= 0 &&
                strategy.next[0][1] >= 0 &&
                strategy.next[0][0] < grid.length &&
                strategy.next[0][1] < grid.length
            ) {
                console.log("A");
                if (!grid[strategy.next[0][1]][[strategy.next[0][0]]].isDiscovered) {
                    console.log(strategy.next);
                    if (grid[strategy.next[0][1]][[strategy.next[0][0]]].isShip) {
                        if (strategy.next[0][0] - 1 >= 0) {
                            if (!grid[strategy.next[0][1]][[strategy.next[0][0] - 1]].isDiscovered) {
                                strategy.next.push([strategy.next[0][0] - 1, strategy.next[0][1]])
                            }
                        }
                        if (strategy.next[0][0] + 1 < grid.length) {
                            if (!grid[strategy.next[0][1]][[strategy.next[0][0] + 1]].isDiscovered) {
                                strategy.next.push([strategy.next[0][0] + 1, strategy.next[0][1]])
                            }
                        }
                        if (strategy.next[0][1] - 1 >= 0) {
                            if (!grid[strategy.next[0][1] - 1][[strategy.next[0][0]]].isDiscovered) {
                                strategy.next.push([strategy.next[0][0], strategy.next[0][1] - 1])
                            }
                        }
                        if (strategy.next[0][1] + 1 < grid.length) {
                            if (!grid[strategy.next[0][1] + 1][[strategy.next[0][0]]].isDiscovered) {
                                strategy.next.push([strategy.next[0][0], strategy.next[0][1] + 1])
                            }
                        }
                    }
                    keepGoing = false;
                    let lastTry = strategy.next[0].slice();
                    strategy.next.shift();
                    console.log(strategy.next);
                    strategy.lastTry = lastTry;
                    console.log('FIRING');
                    return strategy;
                } else {
                    console.log(1);
                    strategy.next.shift();
                    if (strategy.next.length === 1) {
                        keepGoing = false;
                    }
                }
            } else {
                console.log(2);
                strategy.next.shift();
                if (strategy.next.length === 1) {
                    keepGoing = false;
                }
            }
        }
    }

    if (!strategy.plan.length) {
        strategy.plan = getStrategy(grid).flat();
        console.log('THE PLAN IS');
        console.log(strategy.plan);
    }

    let keepGoing = true;
    while (keepGoing) {
        console.log('looping in while');
        if (
            strategy.plan[0][0] >= 0 &&
            strategy.plan[0][1] >= 0 &&
            strategy.plan[0][0] < grid.length &&
            strategy.plan[0][1] < grid.length
        ) {
            console.log('B');
            if (!grid[strategy.plan[0][1]][[strategy.plan[0][0]]].isDiscovered) {
                if (grid[strategy.plan[0][1]][[strategy.plan[0][0]]].isShip) {
                    if (strategy.plan[0][0] - 1 >= 0) {
                        strategy.next.push([strategy.plan[0][0] - 1, strategy.plan[0][1]])
                    }
                    if (strategy.plan[0][0] + 1 < grid.length) {
                        strategy.next.push([strategy.plan[0][0] + 1, strategy.plan[0][1]])
                    }
                    if (strategy.plan[0][1] - 1 >= 0) {
                        strategy.next.push([strategy.plan[0][0], strategy.plan[0][1] - 1])
                    }
                    if (strategy.plan[0][1] + 1 < grid.length) {
                        strategy.next.push([strategy.plan[0][0], strategy.plan[0][1] + 1])
                    }
                }
                keepGoing = false;
                let lastTry = strategy.plan[0].slice();
                strategy.plan.shift();
                strategy.lastTry = lastTry;
                console.log('Found a good fire');
                return strategy;
            } else {
                console.log(3);
                strategy.plan.shift();
            }
        } else {
            console.log(4);
            strategy.plan.shift();
        }
    }
}

// const computerStrategy = function (strategyData, grid) {
//     console.log('**********ENTERING COMP STRATEGY***************');
//     console.log(strategyData);
//     if (strategyData.hitStreak) {
//         console.log('There is a hitstreak...');
//         let rand = Math.random();
//         let direction = rand < 0.25 ? "up" : rand < 0.5 ? "right" : rand < 0.75 ? "down" : "left";
//         console.log('...and the direction is ' + direction);
//         // let direction = 'up';


//         if (direction === 'up') {
//             let x = strategyData.lastHit[0] 
//             let y = strategyData.lastHit[1] - 1
//             if (strategyData.lastHit[1] === 0) {
//                 direction = 'right'
//             } else if (!grid[y][x].isDiscovered) {
//                 if (grid[y][x].isShip) {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: [x, y],
//                         lastTry: [x, y]
//                     }
//                 } else {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: strategyData.lastHit,
//                         lastTry: [x, y]
//                     }
//                 }
//             } else {
//                 direction = 'right'
//             }
//         }

//         if (direction === 'right') {
//             let x = strategyData.lastHit[0] + 1
//             let y = strategyData.lastHit[1]
//             if (strategyData.lastHit[0] === grid[0].length - 1) {
//                 direction = 'down'
//             } else if (!grid[y][x].isDiscovered) {
//                 if (grid[y][x].isShip) {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: [x, y],
//                         lastTry: [x, y]
//                     }
//                 } else {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: strategyData.lastHit,
//                         lastTry: [x, y]
//                     }
//                 }
               
//             }
//             else {
//                 direction = 'down'
//             }
//         }

//         if (direction === 'down') {
//             let x = strategyData.lastHit[0]
//             let y = strategyData.lastHit[1] + 1
//             if (strategyData.lastHit[1] === grid.length - 1) {
//                 direction = 'left'
//             } else if (!grid[y][x].isDiscovered) {
//                 if (grid[y][x].isShip) {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: [x, y],
//                         lastTry: [x, y]
//                     }
//                 } else {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: strategyData.lastHit,
//                         lastTry: [x, y]
//                     }
//                 }
               
//             } else {
//                 direction = 'left'
//             }
//         }

//         if (direction === 'left') {
//             let x = strategyData.lastHit[0] - 1
//             let y = strategyData.lastHit[1]
//             if (strategyData.lastHit[0] === 0) {
//                 direction = 'up'
//             } else if (!grid[y][x].isDiscovered) {
//                 if (grid[y][x].isShip) {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: [x, y],
//                         lastTry: [x, y]
//                     }
//                 } else {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: strategyData.lastHit,
//                         lastTry: [x, y]
//                     }
//                 }
               
//             }
//             else {
//                 direction = 'up'
//             }
//         }
        
//         if (direction === 'up') {
//             let x = strategyData.lastHit[0] - 1
//             let y = strategyData.lastHit[1]
//             if (strategyData.lastHit[1] === 0) {
//                 direction = 'right'
//             } else if (!grid[y][x].isDiscovered) { //TODO: catch this in case does not exist
//                 if (grid[y][x].isShip) {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: [x, y],
//                         lastTry: [x, y]
//                     }
//                 } else {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: strategyData.lastHit,
//                         lastTry: [x, y]
//                     }
//                 }
//             } else {
//                 direction = 'right'
//             }
//         }

//         if (direction === 'right') {
//             let x = strategyData.lastHit[0] + 1
//             let y = strategyData.lastHit[1]
//             if (strategyData.lastHit[0] === grid[0].length - 1) {
//                 direction = 'down'
//             } else if (!grid[y][x].isDiscovered) {
//                 if (grid[y][x].isShip) {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: [x, y],
//                         lastTry: [x, y]
//                     }
//                 } else {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: strategyData.lastHit,
//                         lastTry: [x, y]
//                     }
//                 }
               
//             }
//             else {
//                 direction = 'down'
//             }
//         }

//         if (direction === 'down') {
//             let x = strategyData.lastHit[0]
//             let y = strategyData.lastHit[1] + 1
//             if (strategyData.lastHit[1] === grid.length - 1) {
//                 direction = 'left'
//             } else if (!grid[y][x].isDiscovered) {
//                 if (grid[y][x].isShip) {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: [x, y],
//                         lastTry: [x, y]
//                     }
//                 } else {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: strategyData.lastHit,
//                         lastTry: [x, y]
//                     }
//                 }
               
//             } else {
//                 direction = 'left'
//             }
//         }

//         if (direction === 'left') {
//             let x = strategyData.lastHit[0] - 1
//             let y = strategyData.lastHit[1]
//             if (strategyData.lastHit[0] === 0) {
//                 direction = 'up'
//             } else if (!grid[y][x].isDiscovered) {
//                 if (grid[y][x].isShip) {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: [x, y],
//                         lastTry: [x, y]
//                     }
//                 } else {
//                     return {
//                         hitStreak: true,
//                         diagonal: false,
//                         lastHit: strategyData.lastHit,
//                         lastTry: [x, y]
//                     }
//                 }
               
//             }
//             else {
//                 direction = 'up'
//             }
//         }

//         console.log('All full up so just going random');
//         let go = true;
//         let diagonalNextTime = Math.random() < 0.8
//         while (go) {
//             let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
//             console.log(coordinates);
//             if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
//                 go = false;
//                 return {
//                     hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
//                     diagonal: diagonalNextTime,
//                     lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],   
//                     lastTry: coordinates
//                 }
//             }
//         }

//     } else if (strategyData.diagonal) {
//         console.log('it is diagonal');
//         console.log(grid.length, grid[0].length);
//         if (
//             strategyData.lastTry.some(el => el === 0) || 
//             strategyData.lastTry.some(el => el === grid.length - 1) || 
//             strategyData.lastTry.some(el => el === grid[0].length - 1)
//         ) {
//             console.log('diagonal but on the edge');
//             //Revert to random
//             let go = true;
//             while (go) {
//                 let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
//                 if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
//                     go = false;
//                     return {
//                         hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
//                         diagonal: Math.random() < 0.7,
//                         lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],   
//                         lastTry: coordinates
//                     }
//                 }
//             }
//         } else {
//             const up = Math.random() < 0.5;
//             const right = Math.random() < 0.5;
//             let coordinates = [strategyData.lastTry[0], strategyData.lastTry[1]]
//             if (up && right) {
//                 coordinates = [strategyData.lastTry[0] - 1, strategyData.lastTry[1] + 1]
//             } else if (up && !right) {
//                 coordinates = [strategyData.lastTry[0] - 1, strategyData.lastTry[1] - 1]
//             } else if (!up && !right) {
//                 coordinates = [strategyData.lastTry[0] + 1, strategyData.lastTry[1] - 1]
//             } else {
//                 coordinates = [strategyData.lastTry[0] + 1, strategyData.lastTry[1] + 1]
//             }
//             if(!grid[coordinates[0]][coordinates[1]].isDiscovered) {
//                 //Revert to random
//                 let go = true;
//                 while (go) {
//                     let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
//                     console.log('deep inside the diagonal function... coordinates are');
//                     console.log(coordinates);
//                     if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
//                         go = false;
//                         return {
//                             hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
//                             diagonal: Math.random() < 0.8,
//                             lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],
//                             lastTry: coordinates
//                         }
//                     }
//                 }
//             }
//             return {
//                 hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
//                 diagonal: Math.random() < 0.8,
//                 lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],   
//                 lastTry: coordinates
//             }
//             //SOMETHING NOT RIGHT AFTER THE LAST IF STATEMENT
//         }
//     } else {
//         console.log('None of the above!');
//         let go = true;
//         let diagonalNextTime = Math.random() < 0.8
//         while (go) {
//             let coordinates = generateRandomCoordinates(grid[0].length, grid.length)
//             console.log(coordinates);
//             if (!grid[coordinates[0]][coordinates[1]].isDiscovered) {
//                 go = false;
//                 return {
//                     hitStreak: grid[coordinates[1]][coordinates[0]].isShip,
//                     diagonal: diagonalNextTime,
//                     lastHit: grid[coordinates[1]][coordinates[0]].isShip ? [coordinates[0], coordinates[1]] : [],   
//                     lastTry: coordinates
//                 }
//             }
//         }
//     }
// }

module.exports = computerStrategy;