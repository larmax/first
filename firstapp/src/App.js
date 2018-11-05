import React, { Component } from 'react';
// import './person/person.css';
// import './App.css';
import styles from './App.module.css';
import Person from './person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { id:'1', nimi: 'max' },
      { id:'2', nimi: 'bax' },
      { id:'3', nimi: 'kax' }
    ],
    otherState: 'joku muu value',
    showPersons: false
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
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    console.log('ErrorBoundary',ErrorBoundary)
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
    console.log('deleting person');
  }

  render() {
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {

      persons = (
        <div>
        { this.state.persons.map((person, index) => {
          return <ErrorBoundary  key={ person.id  }>
            <Person
            click={() =>   this.deletePersonHandler(index)}
            nimi={ person.nimi }
            changed={(event) => this.nimiChangedHandler( event, person.id )}      />
            </  ErrorBoundary >

        })}
        </div>
      );
      btnClass= styles.Red;
      //btnClass = classes.Red;
      console.log('btnClass:',btnClass,'styles.App:',styles.App);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
      console.log(styles);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
      console.log(  assignedClasses);
    }


    console.log('Print Styles', styles);
    console.log('assignedClasses',   assignedClasses);

    return (
      <div className={styles.App}>
      <h1>tekstiä</h1>
      <p className={assignedClasses.join(' ')}>lisää tekstiä</p>

      <button
      className={btnClass}
      onClick={this.togglePersonsHandler}> Toggle Persons
      </button>
      {persons}
      </div>
    );

  }
}

export default App;
