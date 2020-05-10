import React, { Component } from 'react';

import classes from './App.css'
import Persons  from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';




class App extends Component {
    state = {
        persons: [
            { id: 'sdfsdf', name: 'Max', age: 28 },
            {id: 'ewfw23r4e', name: 'Manu', age: 29 },
            { id: '23r2df', name: 'Stephanie', age: 26 }
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

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;
        });
        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {
            persons: persons})
    }

    render () {
        let persons = null;
        if(this.state.showPersons){
            persons =
                <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
        }


        return (

            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                />
                {persons}
            </div>

        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
