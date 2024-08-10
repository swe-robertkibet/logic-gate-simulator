import React from 'react';
import InputSwitch from './InputSwitch';
import GateVisual from './GateVisual';

const LogicGate = ({ type, operation }) => {
    const [input1, setInput1] = React.useState(false);
    const [input2, setInput2] = React.useState(false);

    const output = operation(input1, input2);

    return (
        <div className="logic-gate">
            <h2>{type} Gate</h2>
            <div className="gate-content">
                <div className="gate-with-inputs">
                    <div className="input-switches">
                        <InputSwitch value={input1} onChange={setInput1} label="Input 1" />
                        {type !== 'NOT' && <InputSwitch value={input2} onChange={setInput2} label="Input 2" />}
                    </div>
                    <GateVisual type={type} inputs={type === 'NOT' ? [input1] : [input1, input2]} output={output} />
                </div>
            </div>
        </div>
    );
};

export default LogicGate;