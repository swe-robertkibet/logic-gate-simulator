import React from 'react';

const TruthTable = ({ type, operation }) => {
    const generateTruthTable = () => {
        const table = [];
        if (type === 'NOT') {
            table.push([0, operation(false)]);
            table.push([1, operation(true)]);
        } else {
            table.push([0, 0, operation(false, false)]);
            table.push([0, 1, operation(false, true)]);
            table.push([1, 0, operation(true, false)]);
            table.push([1, 1, operation(true, true)]);
        }
        return table;
    };

    return (
        <div className="truth-table">
            <h3>Truth Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>A</th>
                        {type !== 'NOT' && <th>B</th>}
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTruthTable().map((row, index) => (
                        <tr key={index}>
                            {row.map((value, colIndex) => (
                                <td key={colIndex}>{value ? 1 : 0}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TruthTable;