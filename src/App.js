import React, { Component } from 'react';


import classes from './App.css'
import Person from './Persons/Person/Person';




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
        let btnClass = '';
        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((p, index) => {
                        return <Person click={ () => this.deletePersonHandler(index)} name={p.name} key={p.id} changed={(event) => this.nameChangedHandler(event, p.id)}/>
                    })}
                </div>
            );
        btnClass = classes.Red;
        }
        let assignedClasses = [];
        if (this.state.persons.length <= 2){
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length >= 1){
            assignedClasses.push(classes.bold);
        }

        return (

            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass}  onClick={this.togglePersonHandler}>{this.state.persons ? 'Show persons': 'Hide Persons'}</button>
                {persons}
            </div>

        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
