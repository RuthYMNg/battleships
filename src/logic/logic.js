const generateGrid = function (width, height) {
    const result = [];
    width = width ? width : 10;
    height = height ? height : 10;
    for (let i = 0; i < height; i++) {
        result.push([]);
    }
    result.forEach(row => {
        for (let i = 0; i < width; i++) {
            row.push({
                isShip: false,
                isDiscovered: false
            });
        }
    });
    return result;
}

const createGame = function (grid) {

    if (!grid || !grid.length) {
        grid = generateGrid();
    }
    const boats = [
        {
            name: "Carrier",
            length: 5
        },
        {
            name: "Battleship",
            length: 4
        },
        {
            name: "Cruiser",
            length: 3
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


    boats.forEach(boat => {
        let go = true;
        while (go) {
            let result = tryToPlace(grid, boat)
            if (!!result) {
                console.log(`Result is ${result.dir} ${result.x} ${result.y}`);
                go = false;
                grid = updateGrid(grid, result);
            } 
        }
    })
    console.log("FINALLY", grid);
    return grid;
}

const tryToPlace = function (grid, boat) {
    let randomCoordinates = generateRandomCoordinates(grid[0].length, grid.length);
    let x = randomCoordinates[0];
    let y = randomCoordinates[1];
    let num = Math.random();
    let randomDirection = num < 0.25 ? "up" : num < 0.5 ? "right" : num < 0.75 ? "down" : "left"
    console.log(randomDirection, x, y);

    if (randomDirection === 'up') {
        if (y - boat.length < 0) {
            console.log('a');
            randomDirection = "right";
        } else {
            if (boat.length === 5) {
                console.log('b');
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip|| grid[x][y - 2].isShip|| grid[x][y - 4].isShip) {
                    randomDirection = "right";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                console.log('c');
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip|| grid[x][y - 2].isShip) {
                    randomDirection = "right";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                console.log('d');
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip) {
                    randomDirection = "right";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                console.log('e');
                if (grid[x][y].isShip || grid[x][y - 1].isShip) {
                    randomDirection = "right";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'right') {
        if (x + boat.length > grid[0].length) {
            console.log('a');
            randomDirection = "down";
        } else {
            if (boat.length === 5) {
                console.log('b');
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 2][y].isShip|| grid[x + 3][y].isShip|| grid[x + 4][y].isShip) {
                    randomDirection = "down";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                console.log('c');
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 1][y].isShip|| grid[x + 3][y].isShip) {
                    randomDirection = "down";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                console.log('d');
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 2][y].isShip) {
                    randomDirection = "down";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                console.log('e');
                if (grid[x][y].isShip || grid[x + 1][y].isShip) {
                    randomDirection = "down";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'down') {
        if (y + boat.length > grid.length) {
            console.log('a');
            randomDirection = "left";
        } else {
            if (boat.length === 5) {
                console.log('b');
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip|| grid[x][y + 3].isShip|| grid[x][y + 4].isShip) {
                    randomDirection = "left";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                console.log('c');
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip|| grid[x][y + 3].isShip) {
                    randomDirection = "left";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                console.log('d');
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip) {
                    randomDirection = "left";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                console.log('e');
                if (grid[x][y].isShip || grid[x][y + 1].isShip) {
                    randomDirection = "left";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'left') {
        if (x - boat.length < 0) {
            console.log('a');
            randomDirection = "up";
        } else {
            if (boat.length === 5) {
                console.log('b');
                if (grid[x][y].isShip || grid[x - 1][y].isShip|| grid[x - 2][y].isShip|| grid[x - 3][y].isShip|| grid[x - 4][y].isShip) {
                    randomDirection = "up";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                console.log('c');
                if (grid[x][y].isShip || grid[x - 1][y].isShip|| grid[x - 1][y].isShip|| grid[x - 3][y].isShip) {
                    randomDirection = "up";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                console.log('d');
                if (grid[x][y].isShip || grid[x - 1][y].isShip|| grid[x - 2][y].isShip) {
                    randomDirection = "up";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                console.log('e');
                if (grid[x][y].isShip || grid[x - 1][y].isShip) {
                    randomDirection = "up";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'up') {
        if (y - boat.length < 0) {
            console.log('a');
            randomDirection = "right";
        } else {
            if (boat.length === 5) {
                console.log('b');
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip|| grid[x][y - 2].isShip|| grid[x][y - 4].isShip) {
                    randomDirection = "right";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                console.log('c');
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip|| grid[x][y - 2].isShip) {
                    randomDirection = "right";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                console.log('d');
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip) {
                    randomDirection = "right";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                console.log('e');
                if (grid[x][y].isShip || grid[x][y - 1].isShip) {
                    randomDirection = "right";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'right') {
        if (x + boat.length > grid[0].length) {
            console.log('a');
            randomDirection = "down";
        } else {
            if (boat.length === 5) {
                console.log('b');
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 2][y].isShip|| grid[x + 3][y].isShip|| grid[x + 4][y].isShip) {
                    randomDirection = "down";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                console.log('c');
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 1][y].isShip|| grid[x + 3][y].isShip) {
                    randomDirection = "down";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                console.log('d');
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 2][y].isShip) {
                    randomDirection = "down";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                console.log('e');
                if (grid[x][y].isShip || grid[x + 1][y].isShip) {
                    randomDirection = "down";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'down') {
        if (y + boat.length > grid.length) {
            console.log('a');
            randomDirection = "left";
        } else {
            if (boat.length === 5) {
                console.log('b');
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip|| grid[x][y + 3].isShip|| grid[x][y + 4].isShip) {
                    randomDirection = "left";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                console.log('c');
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip|| grid[x][y + 3].isShip) {
                    randomDirection = "left";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                console.log('d');
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip) {
                    randomDirection = "left";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                console.log('e');
                if (grid[x][y].isShip || grid[x][y + 1].isShip) {
                    randomDirection = "left";
                } else { 
                    console.log(`found place for ${boat.name}`)
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    console.log(`did not find place for ${boat.name}`);
    return null;
}

const updateGrid = function (grid, result) {
    if (result.dir === 'up') {
        console.log('up');
        for (let i = 0; i < result.boat.length; i++) {
            console.log(i, result.x, result.y, grid[result.x-i]);
            grid[result.x][result.y - i].name = result.boat.name;
            grid[result.x][result.y - i].length = result.boat.length;
            grid[result.x][result.y - i].isShip = true;
        }
    } else if (result.dir === 'right') {
        console.log('right');
        for (let i = 0; i < result.boat.length; i++) {
            console.log(i, result.x, result.y, grid[result.x]);
            grid[result.x + i][result.y].name = result.boat.name;
            grid[result.x + i][result.y].length = result.boat.length;
            grid[result.x + i][result.y].isShip = true;
        }
    } else if (result.dir === 'down') {
        console.log('down');
        for (let i = 0; i < result.boat.length; i++) {
            console.log(i, result.x, result.y, grid[result.x+i]);
            grid[result.x][result.y + i].name = result.boat.name;
            grid[result.x][result.y + i].length = result.boat.length;
            grid[result.x][result.y + i].isShip = true;
        }
    } else {
        console.log('left');
        for (let i = 0; i < result.boat.length; i++) {
            console.log(i, result.x, result.y, grid[result.x]);
            grid[result.x - i][result.y].name = result.boat.name;
            grid[result.x - i][result.y].length = result.boat.length;
            grid[result.x - i][result.y].isShip = true;
        }
    }
    return grid;
}

const generateRandomCoordinates = function (width, height) {
    const newWidth = Math.floor(Math.random() * width)
    const newHeight = Math.floor(Math.random() * height)
    return [newWidth, newHeight];
}

module.exports = {
    generateGrid: generateGrid,
    createGame: createGame,
    generateRandomCoordinates: generateRandomCoordinates
}