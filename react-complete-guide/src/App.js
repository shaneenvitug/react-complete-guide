import React, { useState } from 'react';
// useState is the hook that allows us to manage state in a functional component
import './App.css';
import Person from './Person/Person';

const app = props => {
  // useState returns an array with exactly two elements, 1st element is our current state, 2nd element is a function that lets us update this state
  const [ personsState, setPersonsState ] = useState({
    // react hooks, function does not merge whatever you pass to it, it replaces it, manually include old state data
    persons: [
      { name: 'Shaneen', age: 28 },
      { name: 'Mark', age: 29 },
      { name: 'Bianx', age: 16 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
  

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = "Samekla";
    setPersonsState({
      persons: [
        { name: 'Samekla', age: 28 },
        { name: 'Mark', age: 29 },
        { name: 'Bianx', age: 17 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > My Hobbies: Basketball</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;