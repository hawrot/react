import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> Hello from React</h1>
        <p>This works</p>
        <Person name="Andrew"/>
        <Person name="Garry"/>
        <Person name="Joe"/>
    </div>
  );
}

export default App;
