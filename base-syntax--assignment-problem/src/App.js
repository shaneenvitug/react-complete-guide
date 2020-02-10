import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

class App extends Component {
  state = {
    usernames: ["shaneenvitug", "bomv22", "redsfever"]
  }

  usernameChangedHandler = (event) => {
    this.setState({
      usernames: ["sjbatugs", event.target.value, "babu"]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          onChange={this.usernameChangedHandler} 
          username={this.state.usernames[1]} />
        <UserOutput username={this.state.usernames[0]} />
        <UserOutput username={this.state.usernames[1]} />
        <UserOutput username={this.state.usernames[2]} />

        <ol>
          <li>(DONE)Create TWO new components: UserInput and UserOutput</li>
          <li>(DONE)UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>(DONE)Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>(DONE)Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>(DONE)Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>(DONE)Add a method to manipulate the state (=> an event-handler method)</li>
          <li>(DONE)Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>(DONE)Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>(DONE)Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>(DONE)Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default App;
