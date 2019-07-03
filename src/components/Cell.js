import React from 'react';

const Cell = props => {
  if (props.win && props.player === 'computer') {
    if (props.cell.name === "Carrier") {
      return <p className='cell carrier'>CA</p>
    } else if (props.cell.name === "Battleship") {
      return <p className='cell battleship'>B</p>
    } else if (props.cell.name === "Cruiser") {
      return <p className='cell cruiser'>C</p>
    } else if (props.cell.name === "Submarine") {
      return <p className='cell submarine'>S</p>
    } else if (props.cell.name === "Destroyer") {
      return <p className='cell destroyer'>D</p>
    } else {
      return <p className='cell sea'></p>
    }
  } else if (props.player === 'human') {
    if (props.cell.isShip && props.cell.isDiscovered) {
      return <p className='cell red'>X</p>
    } else if (props.cell.name === "Carrier") {
      return <p className='cell carrier'>CA</p>
    } else if (props.cell.name === "Battleship") {
      return <p className='cell battleship'>B</p>
    } else if (props.cell.name === "Cruiser") {
      return <p className='cell cruiser'>C</p>
    } else if (props.cell.name === "Submarine") {
      return <p className='cell submarine'>S</p>
    } else if (props.cell.name === "Destroyer") {
      return <p className='cell destroyer'>D</p>
    } else if (props.cell.isDiscovered) {
      return <p className='cell blue'></p>
    } else if (props.cell.isShip && props.player === 'computer') {
      return <p className='cell' onClick={props.fire.bind(null, props.row, props.col)}>O</p>
    } else if (props.player === 'computer') {
      return <p className='cell' onClick={props.fire.bind(null, props.row, props.col)}>.</p>
    } else if (props.cell.isShip) {
      return <p className='cell sea'>.</p>
    } else {
      return <p className='cell sea'></p>
    }
  } else {
    if (props.cell.isShip && props.cell.isDiscovered) {
      return <p className='cell red'>X</p>
    } else if (props.cell.isDiscovered) {
      return <p className='cell blue'></p>
    } else if (props.cell.isShip && props.player === 'computer') {
      return <p className='cell sea' onClick={props.fire.bind(null, props.row, props.col)}>.</p>
    } else if (props.player === 'computer') {
      return <p className='cell sea' onClick={props.fire.bind(null, props.row, props.col)}></p>
    } else if (props.cell.isShip) {
      return <p className='cell'>.</p>
    } else {
      return <p className='cell sea'></p>
    }
  }
};

export default Cell;
