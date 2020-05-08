import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons :  persons})
  }

    togglePersonHandler = () =>{
        const doesShows = this.state.showPersons;
        this.setState({showPersons: !doesShows});
    }

    nameChangedHandler = (event) => {
        this.setState( {
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 26 }
            ]
        } )
    }

    render () {
        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((p, index) => {
                        return <Person click={ () => this.deletePersonHandler(index)} name={p.name} key={index}/>
                    })
                    }

                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.togglePersonHandler}>{this.state.persons ? 'Show persons': 'Hide Persons'}</button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
