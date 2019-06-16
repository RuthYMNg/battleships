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
            player: "A",
            computerStrategy: {
                hitStreak: false,
                diagonal: false,
                lastHit: [],
                lastTry: []
            }
        };
        this.fire = this.fire.bind(this)
    }
    render() {
        return <div>
                <div className='grid'>
                    <h4>YOU</h4>
                    <Grid 
                        width={this.state.width}
                        height={this.state.height}
                        grid={this.state.gridA}
                        fire={this.fire}
                    />
                </div>
                <div class='grid'>
                    <h4>COMPUTER</h4>
                    <Grid
                        width={this.state.width}
                        height={this.state.height}
                        grid={this.state.gridB}
                        fire={this.fire}
                    />
                </div>
            </div>
    }
    componentDidMount() {
        const newGame = createGame(generateGrid(), generateGrid())
        this.setState({
            gridA: newGame.playerA,
            gridB: newGame.playerB
        })
    }
    fire(x, y) {
        const enemyGrid = this.state.player === "A" ? this.state.gridB.slice() : this.state.gridA.slice();
        const enemyPlayer = this.state.player === "A" ? "B" : "A";
        const firedGrid = fire(this.state.player, enemyGrid, y, x);
        if (enemyPlayer === "A") {
            this.setState({
                player: enemyPlayer,
                gridA: firedGrid
            })
            console.log('human has gone');
        } else {
            this.computerGo();
            this.setState({
                player: "B",
                gridB: firedGrid
            })
        }
    }
    computerGo() {
        console.log('computer going');
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
                player: "A"
            })
        }, 1500)
    }
}

export default Game;

