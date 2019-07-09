import React, { Component } from 'react';
import Grid from './Grid';
import Setup from './Setup';
import Instructions from './Instructions';
import standardBoats from '../logic/standardBoats';
import boatsObject from '../logic/boatsObject';
import generateGrid from '../logic/generateGrid';
import createGame from '../logic/createGame';
import fire from '../logic/fire';
import computerStrategy from '../logic/computerStrategy';

export class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            width: 10,
            height: 10, 
            gridA: generateGrid(),
            gridB: generateGrid(),
            boats: standardBoats,
            numberOfBoats: 0,
            player: "A",
            computerStrategy: {
                next: [],
                plan: [],
                lastTry: []
            },
            win: false,
            setup: true,
            setupSize: 10,
            setupBoats: {
                carrier: {
                    number: 1,
                    max: 2,
                    minReached: false,
                    maxReached: false
                },
                battleship: {
                    number: 1,
                    max: 2,
                    minReached: false,
                    maxReached: false
                },
                cruiser: {
                    number: 1,
                    max: 3,
                    minReached: false,
                    maxReached: false
                },
                submarine: {
                    number: 1,
                    max: 3,
                    minReached: false,
                    maxReached: false
                },
                destroyer: {
                    number: 1,
                    max: 4,
                    minReached: false,
                    maxReached: false
                }
            },
            setupOK: true,
            instructions: false,
            inDev: false
        };
        this.fire = this.fire.bind(this)
        this.reset = this.reset.bind(this)
        this.setup = this.setup.bind(this)
        this.updateGridSize = this.updateGridSize.bind(this)
        this.updateBoats = this.updateBoats.bind(this)
        this.toggleInstructions = this.toggleInstructions.bind(this)
        this.toggleDev = this.toggleDev.bind(this)
    }
    render() {
        if (this.state.instructions) {
            return <Instructions 
                toggleInstructions={this.toggleInstructions}
            />
        }
        if (this.state.setup) {
            return <Setup 
                updateGridSize={this.updateGridSize}     
                updateBoats={this.updateBoats}   
                size={this.state.setupSize}  
                boats={this.state.setupBoats}
                setup={this.setup}
                toggleInstructions={this.toggleInstructions}
            />
        }
        return <div>
            {this.state.win ? <div className={this.state.win === 'human' ? 'pyro' : 'explosion'}>
                <div className="before"></div>
                <div className="after"></div>
            </div> : <p></p>}
            <div className='gridContainer'>
                <div className='grid'>
                    <h4>Your grid</h4>
                    {this.state.player === 'B' ? this.state.win ? <h5 className='deselectedPlayer'>Computer is firing...</h5> : <h5 className='selectedPlayer'>Computer is firing...</h5> : <h5 className='deselectedPlayer'>Computer is firing...</h5>}
                    <Grid 
                        player="human"
                        width={this.state.width}
                        height={this.state.height}
                        grid={this.state.gridA}
                        fire={this.fire}
                        win={this.state.win}
                        turn={this.state.player}
                        inDev={this.state.inDev}
                        />
                </div>
                <div className='grid'>
                <h4>Computer's grid</h4>
                    {this.state.player === 'A' && !this.state.win ? <h5 className='selectedPlayer'>Choose where to fire!</h5> : <h5 className='deselectedPlayer'>Choose where to fire!</h5>}
                    <Grid
                        player='computer'
                        width={this.state.width}
                        height={this.state.height}
                        grid={this.state.gridB}
                        fire={this.fire}
                        win={this.state.win}
                        turn={this.state.player}
                        inDev={this.state.inDev}
                        />
                </div>
            </div>
            {this.state.win ? <div>
                <p>{this.state.win === "human" ? "YOU WIN!" : "THE COMPUTER HAS DEFEATED YOU :("}</p>
                <p className='button' onClick={this.reset}>Create a new game</p>
            </div> : this.state.player === 'A' ? <h5 className='selectedPlayer'>Your turn</h5> : <h5 className='selectedPlayer'>Computer thinking</h5>}
            {this.state.win ? <div></div> : <h5 className='button center' onClick={this.reset}>Quit</h5>}
            {this.state.inDev ? <p id='dev' onClick={this.toggleDev}>VIEW NORMAL</p> : <p id='dev' onClick={this.toggleDev}>VIEW IN DEV</p>}
        </div>
    }
    setup() {
        let newBoats = Object.entries(Object.assign(this.state.setupBoats)).reduce((acc, boat) => {
            for (let i = 0; i < boat[1].number; i++) {
                acc.push(boatsObject[boat[0]]);
            }
            return acc;
        }, []);
        const newGame = createGame(generateGrid(this.state.setupSize, this.state.setupSize), generateGrid(this.state.setupSize, this.state.setupSize), newBoats)
        const numberOfBoats = newGame.playerA.reduce((acc, row) => {
            return acc + row.reduce((acc2, cell) => {
                return cell.isShip ? acc2 + 1 : acc2;
            }, 0)
        }, 0);
        window.scrollTo(0, 0)
        this.setState({
            gridA: newGame.playerA,
            gridB: newGame.playerB,
            numberOfBoats: numberOfBoats,
            setup: false
        })
    }
    reset () {
        const newGame = createGame(generateGrid(), generateGrid())
        const numberOfBoats = newGame.playerA.reduce((acc, row) => {
            return acc + row.reduce((acc2, cell) => {
                return cell.isShip ? acc2 + 1 : acc2;
            }, 0)
        }, 0);
        this.setState({
            gridA: newGame.playerA,
            gridB: newGame.playerB,
            numberOfBoats: numberOfBoats,
            boats: [],
            player: "A",
            computerStrategy: {
                next: [],
                plan: [],
                lastTry: []
            },
            win: false,
            setup: true
        })
    }
    fire(x, y) {
        const enemyGrid = this.state.player === "A" ? this.state.gridB.slice() : this.state.gridA.slice();
        const enemyPlayer = this.state.player === "A" ? "B" : "A";
        const firedGrid = fire(this.state.player, enemyGrid, y, x);
        const numberOfDiscovered = firedGrid.reduce((acc, row) => {
            return acc + row.reduce((acc2, cell) => {
                return cell.isShip && cell.isDiscovered ? acc2 + 1 : acc2;
            }, 0)
        }, 0);
        if (enemyPlayer === "A") {
            this.setState({
                player: enemyPlayer,
                gridA: firedGrid,
                win: numberOfDiscovered === this.state.numberOfBoats ? "human" : false
            })
        } else {
            if (numberOfDiscovered !== this.state.numberOfBoats) {
                this.computerGo();
            }
            this.setState({
                player: "B",
                gridB: firedGrid,
                win: numberOfDiscovered === this.state.numberOfBoats ? "human" : false
            })
        }
    }
    toggleInstructions () {
        this.setState({
            instructions: !this.state.instructions
        })
    }
    toggleDev () {
        this.setState({
            inDev: !this.state.inDev
        })
    }
    computerGo() {
        console.log('Computer is going.');
        if (this.state.win) {
            return;
        }
        const timer = 500 + Math.random() * 1000;
        setTimeout(() => {
            let strategy = computerStrategy(this.state.computerStrategy, this.state.gridA)
            console.log('The strategy is:');
            console.log(strategy);
            this.setState({
                computerStrategy: strategy
            })

            const firedGrid = fire(this.state.player, this.state.gridA.slice(), strategy.lastTry[0], strategy.lastTry[1])
            this.setState({
                gridA: firedGrid,
                player: "A",
                win: firedGrid.reduce((acc, row) => {
                    return acc + row.reduce((acc2, cell) => {
                        return cell.isShip && cell.isDiscovered ? acc2 + 1 : acc2;
                    }, 0)
                }, 0) === this.state.numberOfBoats ? "computer" : false
            })
        }, timer)
    }
    updateGridSize (newSize) {
        this.setState({
            setupSize: newSize
        })
    }
    updateBoats (boat, direction) {
        let boats = Object.assign(this.state.setupBoats)
        let checkNumber = Object.entries(boats).reduce((acc, boat) => {
            return acc + boat[1].number
        }, 0);
        if (checkNumber < 3 && direction === 'down') {
            for (let boat in boats) {
                boats[boat].minReached = true
            }
            this.setState({
                setupOK: 'small'
            })
            return;
        } else if (checkNumber < 3 && direction === 'up') {
            for (let boat in boats) {
                if (boats[boat].number !== 0) {
                    boats[boat].minReached = false
                }
            }
        }
        if (checkNumber > 8 && direction === 'up') {
            for (let boat in boats) {
                boats[boat].maxReached = true
            }
            this.setState({
                setupOK: 'big'
            })
            return;
        } else {
            for (let boat in boats) {
                if (boats[boat].number !== boats[boat].max) {
                    boats[boat].maxReached = false
                }
            }
        }
        if (this.state.setupOK) {
            boats[boat].number = direction === 'up' ? boats[boat].number !== boats[boat].max ? boats[boat].number + 1 : boats[boat].number : boats[boat].number - 1 < 0 ? 0 : boats[boat].number - 1;
            if (boats[boat].number === boats[boat].max) {
                boats[boat].maxReached = true;
            } else {
                boats[boat].maxReached = false;
            }
            if (boats[boat].number === 0) {
                boats[boat].minReached = true;
            } else {
                boats[boat].minReached = false;
            }
        }
        this.setState({
            setupBoats: boats
        })
    }
}

export default Game;

