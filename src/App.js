import React from 'react';
import './App.css';
import Clock from './components/clock'
import ClockShield from './components/clockShield'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClockShield></ClockShield>
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
