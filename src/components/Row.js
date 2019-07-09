import React from 'react';
import Cell from './Cell';
import propTypes from 'prop-types';

const Row = props => {
    const cells = props.cells.map((el, i) => {
        return (
            <Cell 
                key={'col' + i} 
                row={props.row}
                col={i}
                cell={el}
                fire={props.fire}
                player={props.player}
                win={props.win}
                turn={props.turn}
                inDev={props.inDev}
            />
        )
    })
    return (
        <div className='row'>
            {cells}
        </div>
    );
};

Row.propTypes = {
    fire: propTypes.func.isRequired,
    player: propTypes.string.isRequired,
    win: propTypes.any.isRequired,
    turn: propTypes.string.isRequired,
    inDev: propTypes.bool.isRequired
  };

export default Row;