import React from 'react';

const InputSwitch = ({ value, onChange, label }) => {
    return (
        <div className="input-switch">
            <label>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <span className="slider"></span>
            </label>
            <span className="input-label">{label}</span>
        </div>
    );
};

export default InputSwitch;