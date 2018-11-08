import React, { PureComponent } from 'react';
// import './person/person.css';
// import './App.css';

import styles from './App.module.css';
import Persons from '../Components/persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props);

  }
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount ');

  }

  componentDidMount(){
    console.log('[App.js] Inside componentWillMount ');
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE App.js] Inside componentWillReceiveProps, nextProps');
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate, nextProps');
  //   return nextState.persons !== this.state.persons
  //   || nextState.persons !== this.state.persons;
  // }

  componentWillUpdate(nextProps,nextState){
    console.log('Inside componentWillUpdate, nextProps');

  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside ComponentDidUpdate ');
  }

  state = {
    persons: [
      { id:'1', nimi: 'max' },
      { id:'2', nimi: 'bax' },
      { id:'3', nimi: 'kax' }
    ],
    otherState: 'joku muu value',
    showPersons: false,
    timesClicked: 0
  }

  nimiChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.nimi = event.target.value;
    console.log(person.nimi);

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons  } );
    console.log('id:',id);
  }

  togglePersonsHandler = () => {
    let personsLength = this.state.persons.length
    console.log('personsLength',personsLength);
    if( personsLength > 0){
      const doesShow = this.state.showPersons;
      this.setState((prevState, props) => {
        return{showPersons: !doesShow,
          timesClicked: this.state.timesClicked +1
        }
      });

    }

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
    console.log('deleting person');
  }

  render() {
    console.log('[App.js] inside render');
    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <div>
        <Persons persons = {this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nimiChangedHandler}
        />
        </div>
      );

    }
    console.log('Print Styles', styles);


    return (
      <div className={styles.App}>
      <button onClick={() => {this.setState({showPersons: true})}}{...console.log('showPersons',this.state.showPersons)}> Show Persons </button>
      <Cockpit
      appTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}
      />
      {persons}
      </div>
    );

  }
}

export default App;
