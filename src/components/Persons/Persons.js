import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {

    static getDerivedStateFromProps(props, state){
        console.log('Persons.js getDerivedState' + props);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons.js Should Componnent Update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js GetSnapchot');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update');
    }

    render() {
        console.log('Persons.js redner');
        return this.props.persons.map((p, index) => {
                return <Person click={() => this.props.clicked(index)} name={p.name} key={p.id}
                               changed={(event) => this.props.changed(event, p.id)}/>
            }
        );

    }
}

export default Persons;
