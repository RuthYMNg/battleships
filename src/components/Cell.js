import React from 'react';

const Cell = props => {
    if (props.cell.isShip && props.cell.isDiscovered) {
      return <p className='cell red'>X</p>
    } else if (props.cell.isDiscovered) {
      return <p className='cell blue'>!</p>
    } else if (props.cell.isShip) {
      return <p className='cell' onClick={props.fire.bind(null, props.row, props.col)}>O</p>
    } else {
      return <p className='cell' onClick={props.fire.bind(null, props.row, props.col)}>.</p>
    }
};

export default Cell;