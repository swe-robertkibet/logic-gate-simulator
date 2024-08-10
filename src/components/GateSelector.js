import React from 'react';

const GateSelector = ({ gates, selectedGate, onSelectGate }) => {
    return (
        <div className="gate-selector">
            <label htmlFor="gate-select">Select Logic Gate:</label>
            <select
                id="gate-select"
                value={selectedGate}
                onChange={(e) => onSelectGate(e.target.value)}
            >
                {gates.map((gate) => (
                    <option key={gate} value={gate}>
                        {gate}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GateSelector;