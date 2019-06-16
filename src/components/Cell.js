import React from 'react';

const Cell = props => {
    if (props.cell.isShip && props.cell.isDiscovered) {
      return <p className='cell'>X</p>
    } else if (props.cell.isDiscovered) {
      return <p className='cell'>!</p>
    } else if (props.cell.isShip) {
      return <p className='cell'>O</p>
    } else {
      return <p className='cell'>.</p>
    }
};

export default Cell;