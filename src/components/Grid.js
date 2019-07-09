import React from 'react';
import propTypes from 'prop-types';
import Row from './Row'

const Grid = props => {
    const rows = props.grid.map((el, i) => {
        return (
            <Row 
                key={'row' + i} 
                row={i}
                cells={el}
                fire={props.fire}
                player={props.player}
                win={props.win}
                turn={props.turn}
                inDev={props.inDev}
            />  
        )
    });
    return rows;
};

Grid.propTypes = {
  fire: propTypes.func.isRequired,
  player: propTypes.string.isRequired,
  win: propTypes.any.isRequired,
  turn: propTypes.string.isRequired,
  inDev: propTypes.bool.isRequired
};

export default Grid;