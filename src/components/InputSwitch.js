import React from 'react';

const InputSwitch = ({ value, onChange, label }) => {
    return (
        <div className="input-switch">
            <label>
                {label}:
                <div className="switch">
                    <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => onChange(e.target.checked)}
                    />
                    <span className="slider"></span>
                </div>
            </label>
        </div>
    );
};

export default InputSwitch;