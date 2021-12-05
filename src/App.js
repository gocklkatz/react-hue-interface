import React, { useState } from 'react';
import Switch from './components/Switch';
import './App.css';

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <h1>Switch</h1>
      <Switch
        isOn={value}
        //onColor="#EF476F"
        onColor="#47ef87"
        handleToggle={() => setValue(!value)}
      />
    </div>
  );
}

export default App;
