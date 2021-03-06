import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><Link to="/courses">All Courses</Link></li>
                <li><Link to="/users">Users</Link></li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path="/courses/"  component={Courses} />
            <Route path="/users" exact component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>Oops! We can't seem to find the page you're looking for.</h1>} />
          </Switch>
          
          <ol style={{textAlign: 'left'}}>
            <li><strong>DONE!</strong> Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li><strong>DONE!</strong> Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li><strong>DONE!</strong> Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li><strong>DONE!</strong> Pass the course ID to the "Course" page and output it there</li>
            <li><strong>DONE!</strong> Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li><strong>DONE!</strong> Load the "Course" component as a nested component of "Courses"</li>
            <li><strong>DONE!</strong> Add a 404 error page and render it for any unknown routes</li>
            <li><strong>DONE!</strong> Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
