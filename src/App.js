import React, { Component } from 'react';
import Game from './components/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="center">Battleships</h1>
        </header>
        <div className='desktop'>
          <Game />
        </div>
        <div className='mobile'>
        </div>
      </div>
    );
  }
}

export default App;
