import React from 'react';

const Cell = props => {
    if (props.cell.isShip && props.cell.isDiscovered) {
      return <p className='cell'>X</p>
    } else if (props.cell.isDiscovered) {
      return <p className='cell'>!</p>
    } else if (props.cell.isShip) {
      return <p className='cell'>O</p>
    } else {
      return <p className='cell' onClick={props.fire.bind(null, props.row, props.col)}>.</p>
    }
};

export default Cell;