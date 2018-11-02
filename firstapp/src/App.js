import React, { Component } from 'react';
// import './person/person.css';
// import './App.css';
import classes from './App.module.css';
import Person from './person/Person.js';
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

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click={() =>   this.deletePersonHandler(index)}
          nimi= {person.nimi}
          id= { person.id}
          key={person.id  }
          changed={(event) => this.nimiChangedHandler(event, person.id)}


          />
        })}

        </div>
      );





    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
      console.log(classes);
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
      console.log(classes);
    }



    return (

      <div className="App">
      <h1>tekstiä</h1>
      <p className =  {classes.join(' ')}>lisää tekstiä</p>

      <button
className={classes.Red }{...console.log('btnClass:',classes.Red)}
      onClick={this.togglePersonsHandler}> 'Toggle Persons'
      </button>
      {persons}
      </div>

    );

  }
}

export default App;
