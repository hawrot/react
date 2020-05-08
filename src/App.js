import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> Hello from React</h1>
        <p>This works</p>
        <button>Switch name</button>
        <Person name="Andrew"/>
      <Person name="Garry">My hobbies: None yet</Person>
        <Person name="Joe"/>
    </div>
  );
}

export default App;
