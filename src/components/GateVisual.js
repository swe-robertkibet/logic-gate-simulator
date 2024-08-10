import React from 'react';

const GateVisual = ({ type, inputs, output }) => {
    const gateColor = "#3498db";
    const strokeWidth = 2;

    const gates = {
        AND: (
            <g>
                <path d="M30,0 L70,0 Q110,0 110,50 Q110,100 70,100 L30,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2="30" y2="25" stroke="black" strokeWidth={strokeWidth} />
                <line x1="0" y1="75" x2="30" y2="75" stroke="black" strokeWidth={strokeWidth} />
                <line x1="110" y1="50" x2="140" y2="50" stroke="black" strokeWidth={strokeWidth} />
            </g>
        ),
        OR: (
            <g>
                <path d="M20,0 Q70,0 110,50 Q70,100 20,100 Q60,50 20,0 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2="20" y2="25" stroke="black" strokeWidth={strokeWidth} />
                <line x1="0" y1="75" x2="20" y2="75" stroke="black" strokeWidth={strokeWidth} />
                <line x1="110" y1="50" x2="140" y2="50" stroke="black" strokeWidth={strokeWidth} />
            </g>
        ),
        NOT: (
            <g>
                <path d="M30,0 L90,50 L30,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="100" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="50" x2="30" y2="50" stroke="black" strokeWidth={strokeWidth} />
                <line x1="110" y1="50" x2="140" y2="50" stroke="black" strokeWidth={strokeWidth} />
            </g>
        ),
        NAND: (
            <g>
                <path d="M30,0 L70,0 Q110,0 110,50 Q110,100 70,100 L30,100 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="120" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2="30" y2="25" stroke="black" strokeWidth={strokeWidth} />
                <line x1="0" y1="75" x2="30" y2="75" stroke="black" strokeWidth={strokeWidth} />
                <line x1="130" y1="50" x2="140" y2="50" stroke="black" strokeWidth={strokeWidth} />
            </g>
        ),
        NOR: (
            <g>
                <path d="M20,0 Q70,0 110,50 Q70,100 20,100 Q60,50 20,0 Z" fill={gateColor} strokeWidth={strokeWidth} stroke="black" />
                <circle cx="120" cy="50" r="10" fill="white" strokeWidth={strokeWidth} stroke="black" />
                <line x1="0" y1="25" x2="20" y2="25" stroke="black" strokeWidth={strokeWidth} />
                <line x1="0" y1="75" x2="20" y2="75" stroke="black" strokeWidth={strokeWidth} />
                <line x1="130" y1="50" x2="140" y2="50" stroke="black" strokeWidth={strokeWidth} />
            </g>
        ),
    };

    return (
        <svg width="140" height="100" viewBox="0 0 140 100">
            {gates[type]}
            {inputs.map((input, index) => (
                <circle
                    key={index}
                    cx="0"
                    cy={type === 'NOT' ? "50" : (index === 0 ? "25" : "75")}
                    r="5"
                    fill={input ? "#2ecc71" : "#e74c3c"}
                />
            ))}
            <circle cx="140" cy="50" r="5" fill={output ? "#2ecc71" : "#e74c3c"} />
        </svg>
    );
};

export default GateVisual;