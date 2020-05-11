import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import withClass from "../../../hoc/WithClass";
import PropTypes from 'prop-types';


class Person extends Component{

    constructor() {
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
      //  this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js rendering');

        return(
        <React.Fragment>
            {this.props.isAuth ? <p>Authenticated</p> : <p>Not Auth!!</p>}
            <p  onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input
                      ref={this.inputElementRef}
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
        </React.Fragment>
        )
    }

}

Person.propTypes = {
    click : PropTypes.func,
    name :PropTypes.string,
    age : PropTypes.number,
    change : PropTypes.func
};

export default withClass(Person, classes.Person);
