import React, { Component } from 'react';
import Grid from './Grid';
import generateGrid from '../logic/generateGrid';

export class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            width: 10,
            height: 10, 
            grid: generateGrid()
        };
        // this.sweep = this.sweep.bind(this)
        // this.play = this.play.bind(this)
        // this.updateSize = this.updateSize.bind(this)
        // this.updateDifficulty = this.updateDifficulty.bind(this)
        // this.customise = this.customise.bind(this)
        // this.updateWidth = this.updateWidth.bind(this)
        // this.updateHeight = this.updateHeight.bind(this)
        // this.updateMines = this.updateMines.bind(this)
        // this.updateFlag = this.updateFlag.bind(this)
        // this.reset = this.reset.bind(this)
        // this.toggleInstructions = this.toggleInstructions.bind(this)
    }
    render() {
        return <Grid 
            width={this.state.width}
            height={this.state.height}
            grid={this.state.grid}
        />
    }
    // play () {
    //     this.setState({
    //         grid: generator(this.state.width, this.state.height, this.state.mines),
    //         setup: false
    //     })
    // }
}

export default Game;

