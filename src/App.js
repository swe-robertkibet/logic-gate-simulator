import React, { useState } from 'react';
import './App.css';
import LogicGate from './components/LogicGate';
import GateSelector from './components/GateSelector';
import { getOperation } from './utils/logicFunctions';

const GATES = ['AND', 'OR', 'NOT', 'NAND', 'NOR'];

function App() {
  const [selectedGate, setSelectedGate] = useState(GATES[0]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Logic Gate Simulator</h1>
      </header>
      <main>
        <GateSelector
          gates={GATES}
          selectedGate={selectedGate}
          onSelectGate={setSelectedGate}
        />
        <LogicGate
          type={selectedGate}
          operation={getOperation(selectedGate)}
        />
      </main>
    </div>
  );
}

export default App;