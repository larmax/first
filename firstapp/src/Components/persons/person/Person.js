import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/WithClass'
import styles from './Person.module.css';
import { AuthContext } from '../../../containers/App'

class Person extends Component {
  constructor(props){
  super(props);
  console.log('[Person.js] Inside constructor', props);
this.inputElement = React.createRef();
  }
  componentWillMount() {
  console.log('[Person.js] Inside componentWillMount ');

  }

  componentDidMount(){
    console.log('[Person.js] Inside componentWillMount ');
    if (this.props.sijainti === 0) {
 this.inputElement.current.focus();
 console.log('[Person.js] focused on', this.props.sijainti);
    }

  }
focus(){
 this.inputElement.current.focus();
}

  render(){
      console.log('[Person.js] inside render');
    return (
        <>
        <AuthContext.Consumer>
        {auth => auth ? <p>Authenticated!</p> : <p> :( </p> }
          </AuthContext.Consumer>
            <p onClick={this.props.click}>I am {this.props.nimi} and I am {4} years old!</p>
            <p>{this.props.children}</p>
            <input
            ref={this.inputElement}
             type="text"
             onChange={this.props.changed}
             value={this.props.nimi} />
        </>
    )
};
}

Person.propTypes = {
click: PropTypes.func,
nimi: PropTypes.string,
changed: PropTypes.func,

}

export default  withClass(Person, styles.person );
