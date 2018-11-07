import React from 'react';
import styles from './Cockpit.module.css';
const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = '';
  if(props.showPersons){

    btnClass = styles.Button;
    console.log('btnclass',    btnClass);
    if (props.showPersons) {

      btnClass = [styles.Button, styles.Red].join( ' ' );
      console.log('showing Persons', btnClass);
    }
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
    console.log('ass. class',assignedClasses);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
    console.log('ass. class', assignedClasses );
  }

  return(
    <div>
    <h1>tekstiä</h1>
    <p className={assignedClasses.join(' ')}>lisää tekstiä</p>

    <button
    className={btnClass}
    onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
};
export default cockpit;
