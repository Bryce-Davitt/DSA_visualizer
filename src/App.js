import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Visualizer from './components/Visualizer';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (type, id) => {
    setSelectedType(type);
    setSelectedId(id);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar onSelect={handleSelect} selectedType={selectedType} selectedId={selectedId} />
      <div style={{ flex: 1, background: '#fff' }}>
        <Visualizer selectedType={selectedType} selectedId={selectedId} />
      </div>
    </div>
  );
}

export default App;
