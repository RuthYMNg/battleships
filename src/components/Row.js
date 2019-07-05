import React from 'react';
import Cell from './Cell'

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
            />
        )
    })
    return (
        <div className='row'>
            {cells}
        </div>
    );
};

// Row.propTypes = {
//   setGame: propTypes.any.isRequired
// };

export default Row;