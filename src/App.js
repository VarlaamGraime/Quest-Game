import React from 'react';
import EnterWindow from './Pages/EnterWindow';
import { Routes, Route, Link } from 'react-router-dom'
import StartWindow from './Pages/StartWindow';

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element=<StartWindow /> />
        <Route path='start' element=<EnterWindow /> />

      </Routes>
    </div>
  );
}

export default App;
