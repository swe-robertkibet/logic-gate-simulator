import React from 'react';

const GateVisual = ({ type, inputs, output }) => {
    const gateColor = "#3498db";
    const strokeWidth = 2;
    const inputColor1 = inputs[0] ? "#2ecc71" : "#e74c3c";
    const inputColor2 = inputs[1] ? "#2ecc71" : "#e74c3c";
    const outputColor = output ? "#2ecc71" : "#e74c3c";
    const tailLength1 = 30; // New variable for tail length
    const tailLength2 = 44; // New variable for tail length

    const gates = {
        AND: (
            <>
                <path d="M30,0 L70,0 Q110,0 110,50 Q110,100 70,100 L30,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2={tailLength1} y2="25" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="0" y1="75" x2={tailLength1} y2="75" stroke={inputColor2} strokeWidth={strokeWidth * 2} />
                <line x1="110" y1="50" x2="140" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
        OR: (
            <>
                <path d="M30,0 Q80,0 120,50 Q80,100 30,100 Q70,50 30,0 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2={tailLength2} y2="25" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="0" y1="75" x2={tailLength2} y2="75" stroke={inputColor2} strokeWidth={strokeWidth * 2} />
                <line x1="120" y1="50" x2="150" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
        NOT: (
            <>
                <path d="M30,0 L90,50 L30,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="100" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="50" x2={tailLength1} y2="50" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="110" y1="50" x2="140" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
        NAND: (
            <>
                <path d="M30,0 L70,0 Q110,0 110,50 Q110,100 70,100 L30,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="120" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2={tailLength1} y2="25" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="0" y1="75" x2={tailLength1} y2="75" stroke={inputColor2} strokeWidth={strokeWidth * 2} />
                <line x1="130" y1="50" x2="160" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
        NOR: (
            <>
                <path d="M30,0 Q80,0 120,50 Q80,100 30,100 Q70,50 30,0 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="130" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2={tailLength2} y2="25" stroke={inputColor1} strokeWidth={strokeWidth * 2} />
                <line x1="0" y1="75" x2={tailLength2} y2="75" stroke={inputColor2} strokeWidth={strokeWidth * 2} />
                <line x1="140" y1="50" x2="170" y2="50" stroke={outputColor} strokeWidth={strokeWidth * 2} />
            </>
        ),
    };

    return (
        <svg width="170" height="100" viewBox="0 0 170 100">
            {gates[type]}
        </svg>
    );
};

export default GateVisual;