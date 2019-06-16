import React from 'react';
import propTypes from 'prop-types';
import Row from './Row'

const Grid = props => {
    const rows = props.grid.map((el, i) => {
        return (
            <Row 
                key={'row' + i} 
                row={i}
                cells={el}
            />  
        )
    });
    return rows;
};

// Grid.propTypes = {
//   setGame: propTypes.any.isRequired
// };

export default Grid;