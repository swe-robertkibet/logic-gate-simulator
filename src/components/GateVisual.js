import React from 'react';

const GateVisual = ({ type }) => {
    const gateColor = "#3498db";
    const strokeWidth = 2;

    const gates = {
        AND: (
            <path d="M10,0 L50,0 Q90,0 90,50 Q90,100 50,100 L10,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
        ),
        OR: (
            <path d="M0,0 Q50,0 90,50 Q50,100 0,100 Q40,50 0,0 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
        ),
        NOT: (
            <>
                <path d="M10,0 L70,50 L10,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="80" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
            </>
        ),
        NAND: (
            <>
                <path d="M10,0 L50,0 Q90,0 90,50 Q90,100 50,100 L10,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="100" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
            </>
        ),
        NOR: (
            <>
                <path d="M0,0 Q50,0 90,50 Q50,100 0,100 Q40,50 0,0 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="100" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
            </>
        ),
    };

    return (
        <svg width="120" height="100" viewBox="0 0 120 100">
            {gates[type]}
        </svg>
    );
};

export default GateVisual;