import React from 'react';
import AddPlayer from './components/AddPlayer'
import './App.css';
import Title from './components/Title';

import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <main>
      < Title content="Title"/>

 
      </main>


      <header className="App-header">
      <  Scoreboard />
    
    
      </header>
    </div>
  );
}

export default App;
