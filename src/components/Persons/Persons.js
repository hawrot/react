import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked){
            return true;
        }else {
            return false;
        }
    }*/
    //this was implemented automatically by PureComponent

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
