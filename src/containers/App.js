import React, {Component} from 'react';

import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from "../hoc/Aux";
import AuthContext from '../context/auth-context';


class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');

    }

    state = {
        persons: [
            {id: 'sdfsdf', name: 'Max', age: 28},
            {id: 'ewfw23r4e', name: 'Manu', age: 29},
            {id: '23r2df', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false,
        changeCounter: 0,
        auth : false
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getGerivedState' + props);
        return state;
    }

    componentDidMount() {
        console.log('App.js component did mount')
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePersonHandler = () => {
        const doesShows = this.state.showPersons;
        this.setState({showPersons: !doesShows});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState((prevState, props) =>{
            return{
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        }
        )
    }

    loginHandler = () =>{
        this.setState({auth:true});
    }

    render() {
        console.log('App.js render');
        let persons = null;
        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuth={this.state.auth}
                />
        }

        return (

           <Aux>
               <AuthContext.Provider value={{auth: this.state.auth, login : this.loginHandler}}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonHandler}
                />
                {persons}
               </AuthContext.Provider>
           </Aux>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default withClass(App, classes.App);
