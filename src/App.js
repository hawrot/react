import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

   const [ personsState, setPersonsState ] = useState({
    persons: [
        {name: 'Matt'},
        {name: 'Mark'},
        {name: 'Ellie'}
    ]
});

const switchNameHandler = (newName) =>{
    setPersonsState({
        persons: [
            {name: newName},
            {name: 'Tina'},
            {name: 'Ellie'}
        ]
    })
}

  return (
    <div className="App">
      <h1> Hello from React</h1>
        <p>This works</p>
        <button onClick={() =>switchNameHandler('Matt H')}>Switch name</button>
        <Person name={personsState.persons[0].name}/>
      <Person name={personsState.persons[1].name}>My hobbies: None yet</Person>
        <Person click={this.switchNameHandler} name={personsState.persons[2].name} />
    </div>
  );
}

export default App;


