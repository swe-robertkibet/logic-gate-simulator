import React from 'react';
import InputSwitch from './InputSwitch';
import OutputDisplay from './OutputDisplay';

const LogicGate = ({ type, operation }) => {
    const [input1, setInput1] = React.useState(false);
    const [input2, setInput2] = React.useState(false);

    const output = operation(input1, input2);

    return (
        <div className="logic-gate">
            <h2>{type} Gate</h2>
            <div className="inputs">
                <InputSwitch value={input1} onChange={setInput1} label="Input 1" />
                {type !== 'NOT' && <InputSwitch value={input2} onChange={setInput2} label="Input 2" />}
            </div>
            <OutputDisplay value={output} />
        </div>
    );
};

export default LogicGate;