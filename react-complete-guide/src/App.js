import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is managed from inside the component, *state property is only available in components that extends component (class based react components)
  // props are set and passed from outside
  state = {
    persons: [
      { id: 'afsd', name: 'Shaneen', age: 28 },
      { id: 'eqrwe', name: 'Mark', age: 29 },
      { id: 'sdfs', name: 'Bianx', age: 16 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Shaneen', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Bianx', age: 16 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // update state in an immutable fashion
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              // key should not be index since a list may change and index will change too
              key={person.id} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;