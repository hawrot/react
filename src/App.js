import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';




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
            persons = (
                <div>
                    {this.state.persons.map((p, index) => {
                        return <Person click={ () => this.deletePersonHandler(index)} name={p.name} key={p.id} changed={(event) => this.nameChangedHandler(event, p.id)}/>
                    })}
                </div>
            );

        }
        let classes = [];
        if (this.state.persons.length <= 2){
            classes.push('red');
        }
        if (this.state.persons.length >= 1){
            classes.push('bold');
        }

        return (

            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>{this.state.persons ? 'Show persons': 'Hide Persons'}</StyledButton>
                {persons}
            </div>

        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
