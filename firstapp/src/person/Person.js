import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.nimi} and I am {props.id} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.nimi} />
        </div>
    )
};

export default person;
