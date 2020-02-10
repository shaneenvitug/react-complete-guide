import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is managed from inside the component, *state property is only available in components that extends component (class based react components)
  // props are set and passed from outside
  state = {
    persons: [
      { name: 'Shaneen', age: 28 },
      { name: 'Mark', age: 29 },
      { name: 'Bianx', age: 16 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = "Samekla";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Mark', age: 29 },
        { name: 'Bianx', age: 17 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={() => this.switchNameHandler('Samekla')}>Switch Name</button>
       <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
       <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Nin!')} >My Hobbies: Basketball</Person>
       <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;