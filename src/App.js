import React from 'react';
import NavState from './context/NavState';
import MainMenu from './components/MainMenu';

function App() {
  return (
      <NavState>
        <MainMenu />
      </NavState>
  );
}

export default App;