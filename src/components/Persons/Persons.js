import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.persons !== this.props.persons){
            return true;
        }else {
            return false;
        }
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
