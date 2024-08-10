import React from 'react';

const OutputDisplay = ({ value }) => {
    return (
        <div className="output-display">
            <strong>Output:</strong>
            <div className={`output-value ${value ? 'on' : 'off'}`}>
                {value ? '1' : '0'}
            </div>
        </div>
    );
};

export default OutputDisplay;