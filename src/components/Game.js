import React, { Component } from 'react';
import Grid from './Grid';
import generateGrid from '../logic/generateGrid';
import createGame from '../logic/createGame';
import fire from '../logic/fire';

export class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            width: 10,
            height: 10, 
            gridA: generateGrid(),
            gridB: generateGrid(),
            boats: [],
            player: "A"
        };
        this.fire = this.fire.bind(this)
    }
    render() {
        return <div>
                <div className='grid'>
                    <h4>GRID A</h4>
                    <Grid 
                        width={this.state.width}
                        height={this.state.height}
                        grid={this.state.gridA}
                        fire={this.fire}
                    />
                </div>
                <div class='grid'>
                    <h4>GRID B</h4>
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
        console.log(newGame);
        this.setState({
            gridA: newGame.playerA,
            gridB: newGame.playerB
        })
    }
    fire(x, y) {
        const enemyGrid = this.state.player === "A" ? this.state.gridB.slice() : this.state.gridA.slice();
        const enemyPlayer = this.state.player === "A" ? "B" : "A";
        console.log(this.state.player, enemyGrid, x, y);
        const firedGrid = fire(this.state.player, enemyGrid, y, x);
        if (enemyPlayer === "A") {
            this.setState({
                player: enemyPlayer,
                gridA: firedGrid
            })
        } else {
            this.setState({
                player: enemyPlayer,
                gridB: firedGrid
            })
        }
    }
}

export default Game;

