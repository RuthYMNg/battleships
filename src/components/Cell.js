import React from 'react';

const Cell = props => {
  if (props.win && props.player === 'computer') {
    if (props.cell.name === "Carrier") {
      return <div className='cell carrier'><p>CA</p></div>
    } else if (props.cell.name === "Battleship") {
      return <div className='cell battleship'><p>B</p></div>
    } else if (props.cell.name === "Cruiser") {
      return <div className='cell cruiser'><p>C</p></div>
    } else if (props.cell.name === "Submarine") {
      return <div className='cell submarine'><p>S</p></div>
    } else if (props.cell.name === "Destroyer") {
      return <div className='cell destroyer'><p>D</p></div>
    } else if (props.cell.isDiscovered) {
      return <div className='cell blue'><img src='/splash.png'/></div>
    } else {
      return <div className='cell sea'></div>
    }
  } else if (props.player === 'human') {
    if (props.cell.isShip && props.cell.isDiscovered) {
      return <div className='cell red'><img src='/fire.png'/></div>
    } else if (props.cell.name === "Carrier") {
      return <div className='cell carrier'><p>CA</p></div>
    } else if (props.cell.name === "Battleship") {
      return <div className='cell battleship'><p>B</p></div>
    } else if (props.cell.name === "Cruiser") {
      return <div className='cell cruiser'><p>C</p></div>
    } else if (props.cell.name === "Submarine") {
      return <div className='cell submarine'><p>S</p></div>
    } else if (props.cell.name === "Destroyer") {
      return <div className='cell destroyer'><p>D</p></div>
    } else if (props.cell.isDiscovered) {
      return <div className='cell blue'><img src='/splash.png'/></div>
    } else if (props.player === 'computer' && props.inDev) {
      return <div className='cell' onClick={props.fire.bind(null, props.row, props.col)}>.</div>
    } else if (props.cell.isShip && props.inDev) {
      return <div className='cell sea'>.</div>
    } else {
      return <div className='cell sea'></div>
    }
  } else {
    if (props.cell.isShip && props.cell.isDiscovered) {
      return <div className='cell red'><img src='/fire.png'/></div>
    } else if (props.cell.isDiscovered) {
      return <div className='cell blue'><img src='/splash.png'/></div>
    } else if (props.cell.isShip && props.player === 'computer' && props.inDev) {
      return <div className={`cell ${props.turn === 'A' ? 'cell-hover' : ''} sea`} onClick={props.turn === 'A' ? props.fire.bind(null, props.row, props.col) : null}>.</div>
    } else if (props.player === 'computer') {
      return <div className={`cell ${props.turn === 'A' ? 'cell-hover' : ''} sea`} onClick={props.turn === 'A' ? props.fire.bind(null, props.row, props.col) : null}></div>
    } else if (props.cell.isShip && props.inDev) {
      return <div className={`cell ${props.turn === 'A' ? 'cell-hover' : ''}`}>.</div>
    } else {
      return <div className='cell sea'></div>
    }
  }
};

export default Cell;
