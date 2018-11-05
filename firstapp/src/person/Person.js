import React from 'react';

import styles from './Person.module.css';


const person = ( props ) => {
const rnd = Math.random();

if ( rnd > 0.7 ) {
  throw new Error ( 'Something went wrong' );
}

    return (
        <div className={styles.person}>
            <p onClick={props.click}>I am {props.nimi} and I am {Math.random()} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.nimi} />
        </div>
    )
};

export default person;
