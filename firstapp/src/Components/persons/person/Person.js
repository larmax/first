import React, { Component } from 'react';

import styles from './Person.module.css';

class Person extends Component {
  constructor(props){
  super(props);
  console.log('[Person.js] Inside constructor', props);

  }
  componentWillMount() {
  console.log('[Person.js] Inside componentWillMount ');

  }

  componentDidMount(){
    console.log('[Person.js] Inside componentWillMount ');
  }
  render(){
      console.log('[Person.js] inside render');
// const rnd = Math.random();
// console.log('rnd:', rnd);
// if ( rnd > 0.7 ) {
//   throw new Error ( 'Something went wrong' );
// }

    return (
        <div className={styles.Person}>
            <p onClick={this.props.click}>I am {this.props.nimi} and I am {4} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.nimi} />
        </div>
    )
};
}

export default Person;
