import React from 'react';
import propTypes from 'prop-types';

const Setup = props => {
    return <div className='setup'>
        <div>
            <h4 className='center'>Grid Size</h4>
            <div className='setup-bar'>
                <div className={`size-number ${props.size === 8 ? 'active-size' : 'inactive'}`} onClick={props.updateGridSize.bind(null, 8)}><p>8</p></div>
                <div className={`size-number ${props.size === 9 ? 'active-size' : 'inactive'}`} onClick={props.updateGridSize.bind(null, 9)}><p>9</p></div>
                <div className={`size-number ${props.size === 10 ? 'active-size' : 'inactive'}`} onClick={props.updateGridSize.bind(null, 10)}><p>10</p></div>
                <div className={`size-number ${props.size === 11 ? 'active-size' : 'inactive'}`} onClick={props.updateGridSize.bind(null, 11)}><p>11</p></div>
                <div className={`size-number ${props.size === 12 ? 'active-size' : 'inactive'}`} onClick={props.updateGridSize.bind(null, 12)}><p>12</p></div>
                <div className={`size-number ${props.size === 13 ? 'active-size' : 'inactive'}`} onClick={props.updateGridSize.bind(null, 13)}><p>13</p></div>
                <div className={`size-number ${props.size === 14 ? 'active-size' : 'inactive'}`} onClick={props.updateGridSize.bind(null, 14)}><p>14</p></div>
                <div className={`size-number ${props.size === 15 ? 'active-size' : 'inactive'}`} onClick={props.updateGridSize.bind(null, 15)}><p>15</p></div>
            </div>
        </div>
        <div>
            <h4 className='center'>Ships</h4>
            <div className='boat-list'>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat carrier'>CA</div>
                        <div className='setup-boat carrier'>CA</div>
                        <div className='setup-boat carrier'>CA</div>
                        <div className='setup-boat carrier'>CA</div>
                        <div className='setup-boat carrier'>CA</div>
                    </div>
                    <h5>CARRIER</h5>
                    <div className='setup-bar'>
                        <h4 className={`icon ${props.boats.carrier.minReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'carrier', 'down')}><i className="fas fa-chevron-left"></i></h4>
                        <h4 className='icon'>{props.boats.carrier.number}</h4>
                        <h4 className={`icon ${props.boats.carrier.maxReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'carrier', 'up')}><i className="fas fa-chevron-right"></i></h4>
                    </div>
                </div>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat battleship'>B</div>
                        <div className='setup-boat battleship'>B</div>
                        <div className='setup-boat battleship'>B</div>
                        <div className='setup-boat battleship'>B</div>
                    </div>
                    <h5>BATTLESHIP</h5>
                    <div className='setup-bar'>
                        <h4 className={`icon ${props.boats.battleship.minReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'battleship', 'down')}><i className="fas fa-chevron-left"></i></h4>
                        <h4 className='icon'>{props.boats.battleship.number}</h4>
                        <h4 className={`icon ${props.boats.battleship.maxReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'battleship', 'up')}><i className="fas fa-chevron-right"></i></h4>
                    </div>
                </div>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat cruiser'>C</div>
                        <div className='setup-boat cruiser'>C</div>
                        <div className='setup-boat cruiser'>C</div>
                    </div>
                    <h5>CRUISER</h5>
                    <div className='setup-bar'>
                        <h4 className={`icon ${props.boats.cruiser.minReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'cruiser', 'down')}><i className="fas fa-chevron-left"></i></h4>
                        <h4 className='icon'>{props.boats.cruiser.number}</h4>
                        <h4 className={`icon ${props.boats.cruiser.maxReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'cruiser', 'up')}><i className="fas fa-chevron-right"></i></h4>
                    </div>
                </div>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat submarine'>S</div>
                        <div className='setup-boat submarine'>S</div>
                        <div className='setup-boat submarine'>S</div>
                    </div>
                    <h5>SUBMARINE</h5>
                    <div className='setup-bar'>
                        <h4 className={`icon ${props.boats.submarine.minReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'submarine', 'down')}><i className="fas fa-chevron-left"></i></h4>
                        <h4 className='icon'>{props.boats.submarine.number}</h4>
                        <h4 className={`icon ${props.boats.submarine.maxReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'submarine', 'up')}><i className="fas fa-chevron-right"></i></h4>
                    </div>
                </div>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat destroyer'>D</div>
                        <div className='setup-boat destroyer'>D</div>
                    </div>
                    <h5>DESTROYER</h5>
                    <div className='setup-bar'>
                        <h4 className={`icon ${props.boats.destroyer.minReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'destroyer', 'down')}><i className="fas fa-chevron-left"></i></h4>
                        <h4 className='icon'>{props.boats.destroyer.number}</h4>
                        <h4 className={`icon ${props.boats.destroyer.maxReached ? 'active-arrow' : ''}`} onClick={props.updateBoats.bind(null, 'destroyer', 'up')}><i className="fas fa-chevron-right"></i></h4>
                    </div>
                </div>
            </div>
        </div>
        <p className='button mt-30' onClick={props.setup}>Start Game</p>
        <p className='button little-button mt-30' onClick={props.toggleInstructions}>How To Play</p>
    </div>
};

// Setup.propTypes = {
//   setGame: propTypes.any.isRequired
// };

export default Setup;