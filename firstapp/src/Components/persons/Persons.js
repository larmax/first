import React, { PureComponent } from 'react'

import Person from './person/Person'

class Persons extends PureComponent{
  constructor( props ){
  super( props );
  console.log('[Persons.js] Inside constructor', props);
      this.lastPersonRef = React.createRef();
  }
  componentWillMount() {
  console.log('[Persons.js] Inside componentWillMount ');

  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentWillMount ');
console.log('lastpersonref',React.createRef());
        this.lastPersonRef.current.focus();

}

    componentWillReceiveProps(nextProps){
      console.log('[UPDATE Persons.js] Inside componentWillReceiveProps, nextProps');
    }

// shouldComponentUpdate(nextProps,nextState){
//   console.log('[UPDATE Persons.js] Inside componentShouldUpdate, nextProps');
//   return nextProps.persons !== this.props.persons ||
//             nextProps.changed !== this.props.changed ||
//             nextProps.clicked !== this.props.clicked;
// }

componentWillUpdate(nextProps,nextState){
  console.log('Inside componentWillUpdate, nextProps');

}

componentDidUpdate(){
  console.log('[UPDATE Persons.js] Inside ComponentDidUpdate ');
}


  render(){
      console.log('[Persons.js] inside render');
  return this.props.persons.map( (person, index) => {
    return <Person
      click = {() =>   this.props.clicked( index )}
      nimi = { person.nimi }
      sijainti = { index }
      ref = { this.lastPersonRef }
      authenticated = { this.props.isAuthenticated }
      key = { person.id  }
      changed = {( event ) => this.props.changed( event, person.id )}
      isAuthenticated = {this.props.authenticated}
        />

  } );
}
}
export default Persons;
