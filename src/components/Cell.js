import React from 'react';

const Cell = props => {
  if (props.win) {
    if (props.cell.name === "Carrier") {
      return <p className='cell red'>CA</p>
    } else if (props.cell.name === "Battleship") {
      return <p className='cell red'>B</p>
    } else if (props.cell.name === "Cruiser") {
      return <p className='cell red'>C</p>
    } else if (props.cell.name === "Submarine") {
      return <p className='cell red'>S</p>
    } else if (props.cell.name === "Destroyer") {
      return <p className='cell red'>D</p>
    } else {
      return <p className='cell'>.</p>
    }
  } else {
    if (props.cell.isShip && props.cell.isDiscovered) {
      return <p className='cell red'>X</p>
    } else if (props.cell.isDiscovered) {
      return <p className='cell blue'>!</p>
    } else if (props.cell.isShip && props.player === 'computer') {
      return <p className='cell' onClick={props.fire.bind(null, props.row, props.col)}>O</p>
    } else if (props.player === 'computer') {
      return <p className='cell' onClick={props.fire.bind(null, props.row, props.col)}>.</p>
    } else if (props.cell.isShip) {
      return <p className='cell'>O</p>
    } else {
      return <p className='cell'>.</p>
    }
  }
};

export default Cell;
