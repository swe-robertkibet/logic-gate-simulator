import React from 'react';

const OutputDisplay = ({ value }) => {
    return (
        <div className="output-display">
            <strong>Output:</strong> {value ? '1' : '0'}
        </div>
    );
};

export default OutputDisplay;