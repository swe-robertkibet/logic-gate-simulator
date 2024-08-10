import React from 'react';

const InputSwitch = ({ value, onChange, label }) => {
    return (
        <div className="input-switch">
            <label>
                {label}:
                <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                />
            </label>
        </div>
    );
};

export default InputSwitch;