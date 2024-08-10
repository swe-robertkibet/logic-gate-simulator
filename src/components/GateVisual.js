import React from 'react';

const GateVisual = ({ type, inputs, output }) => {
    const gateColor = "#3498db";
    const strokeWidth = 2;
    const inputColor1 = inputs[0] ? "#2ecc71" : "#e74c3c";
    const inputColor2 = inputs[1] ? "#2ecc71" : "#e74c3c";
    const outputColor = output ? "#2ecc71" : "#e74c3c";
    const tailLength1 = 30;
    const tailLength2 = 44;

    const gates = {
        AND: (
            <>
                <path d="M70,0 L110,0 Q150,0 150,50 Q150,100 110,100 L70,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2={tailLength1 + 40} y2="25" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="0" y1="75" x2={tailLength1 + 40} y2="75" stroke={inputColor2} strokeWidth={strokeWidth * 2} />
                <line x1="150" y1="50" x2="180" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
        OR: (
            <>
                <path d="M70,0 Q120,0 160,50 Q120,100 70,100 Q110,50 70,0 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2={tailLength2 + 40} y2="25" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="0" y1="75" x2={tailLength2 + 40} y2="75" stroke={inputColor2} strokeWidth={strokeWidth * 2} />
                <line x1="160" y1="50" x2="190" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
        NOT: (
            <>
                <path d="M70,0 L130,50 L70,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="140" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="50" x2={tailLength1 + 40} y2="50" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="150" y1="50" x2="180" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
        NAND: (
            <>
                <path d="M70,0 L110,0 Q150,0 150,50 Q150,100 110,100 L70,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="160" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2={tailLength1 + 40} y2="25" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="0" y1="75" x2={tailLength1 + 40} y2="75" stroke={inputColor2} strokeWidth={strokeWidth * 2} />
                <line x1="170" y1="50" x2="200" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
        NOR: (
            <>
                <path d="M70,0 Q120,0 160,50 Q120,100 70,100 Q110,50 70,0 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="170" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2={tailLength2 + 40} y2="25" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="0" y1="75" x2={tailLength2 + 40} y2="75" stroke={inputColor2} strokeWidth={strokeWidth * 2} />
                <line x1="180" y1="50" x2="210" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
    };

    return (
        <svg width="210" height="100" viewBox="0 0 210 100">
            {gates[type]}
        </svg>
    );
};

export default GateVisual;