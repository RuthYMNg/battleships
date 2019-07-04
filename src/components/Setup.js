import React from 'react';
import propTypes from 'prop-types';

const Setup = props => {
    return <div className='setup'>
        <div>
            <h4 className='center'>Grid Size</h4>
            <div className='setup-bar'>
                <div className='size-number'><p>8</p></div>
                <div className='size-number'><p>9</p></div>
                <div className='size-number'><p>10</p></div>
                <div className='size-number'><p>11</p></div>
                <div className='size-number'><p>12</p></div>
                <div className='size-number'><p>13</p></div>
                <div className='size-number'><p>14</p></div>
                <div className='size-number'><p>15</p></div>
            </div>
        </div>
        <div>
            <h4 className='center'>Boats</h4>
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
                    <div className='setup-bar'><h4 className='icon'><i className="fas fa-chevron-left"></i></h4>
                    <h4 className='icon'>1</h4>
                    <h4 className='icon'><i className="fas fa-chevron-right"></i></h4></div>
                </div>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat battleship'>B</div>
                        <div className='setup-boat battleship'>B</div>
                        <div className='setup-boat battleship'>B</div>
                        <div className='setup-boat battleship'>B</div>
                    </div>
                    <h5>BATTLESHIP</h5>
                    <div className='setup-bar'><h4 className='icon'><i className="fas fa-chevron-left"></i></h4>
                    <h4 className='icon'>1</h4>
                    <h4 className='icon'><i className="fas fa-chevron-right"></i></h4></div>
                </div>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat cruiser'>C</div>
                        <div className='setup-boat cruiser'>C</div>
                        <div className='setup-boat cruiser'>C</div>
                    </div>
                    <h5>CRUISER</h5>
                    <div className='setup-bar'><h4 className='icon'><i className="fas fa-chevron-left"></i></h4>
                    <h4 className='icon'>1</h4>
                    <h4 className='icon'><i className="fas fa-chevron-right"></i></h4></div>
                </div>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat submarine'>S</div>
                        <div className='setup-boat submarine'>S</div>
                        <div className='setup-boat submarine'>S</div>
                    </div>
                    <h5>SUBMARINE</h5>
                    <div className='setup-bar'><h4 className='icon'><i className="fas fa-chevron-left"></i></h4>
                    <h4 className='icon'>1</h4>
                    <h4 className='icon'><i className="fas fa-chevron-right"></i></h4></div>
                </div>
                <div className='boat-info'>
                    <div className='setup-bar boat-container'>
                        <div className='setup-boat destroyer'>D</div>
                        <div className='setup-boat destroyer'>D</div>
                    </div>
                    <h5>DESTROYER</h5>
                    <div className='setup-bar'><h4 className='icon'><i className="fas fa-chevron-left"></i></h4>
                    <h4 className='icon'>1</h4>
                    <h4 className='icon'><i className="fas fa-chevron-right"></i></h4></div>
                </div>
            </div>
        </div>
    </div>
};

// Setup.propTypes = {
//   setGame: propTypes.any.isRequired
// };

export default Setup;