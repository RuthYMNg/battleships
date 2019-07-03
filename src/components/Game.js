import React, { Component } from 'react';
import Grid from './Grid';
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
            boats: [],
            numberOfBoats: 0,
            player: "A",
            computerStrategy: {
                hitStreak: false,
                diagonal: false,
                lastHit: [],
                lastTry: []
            },
            win: false
        };
        this.fire = this.fire.bind(this)
        this.reset = this.reset.bind(this)
    }
    render() {
        return <div>
            <div className='gridContainer'>
                <div className='grid'>
                    <h4>Your grid</h4>
                    {this.state.player === 'B' ? <h4 className='selectedPlayer'>Computer is firing...</h4> : <h4 className='deselectedPlayer'>Computer is firing...</h4>}
                    <Grid 
                        player="human"
                        width={this.state.width}
                        height={this.state.height}
                        grid={this.state.gridA}
                        fire={this.fire}
                        win={this.state.win}
                        />
                </div>
                <div class='grid'>
                <h4>Computer's grid</h4>
                    {this.state.player === 'A' ? <h4 className='selectedPlayer'>Choose where to fire!</h4> : <h4 className='deselectedPlayer'>Choose where to fire!</h4>}
                    <Grid
                        player='computer'
                        width={this.state.width}
                        height={this.state.height}
                        grid={this.state.gridB}
                        fire={this.fire}
                        win={this.state.win}
                        />
                </div>
            </div>
            {this.state.win ? <div>
                <p>{this.state.win === "human" ? "You win!" : "The computer won :("}</p>
                <p className='button' onClick={this.reset}>Create a new game</p>
            </div> : this.state.player === 'A' ? <h4 className='selectedPlayer'>Your turn</h4> : <h4 className='selectedPlayer'>Computer thinking</h4>}
        </div>
    }
    componentDidMount() {
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
            numberOfBoats: 0,
            player: "A",
            computerStrategy: {
                hitStreak: false,
                diagonal: false,
                lastHit: [],
                lastTry: []
            },
            win: false
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
            console.log('human has gone');
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
    computerGo() {
        console.log('computer going');
        console.log(this.state.win)
        if (this.state.win) {
            return;
        }
        const timer = 500 + Math.random() * 1000;
        console.log(timer)
        setTimeout(() => {
            let strategy = computerStrategy(this.state.computerStrategy, this.state.gridA)
            console.log('strategy is:');
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
}

export default Game;

