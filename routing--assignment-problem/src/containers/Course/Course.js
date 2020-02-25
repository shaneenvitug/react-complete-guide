import React, { Component } from 'react';

class Course extends Component {

    componentDidMount () {
       console.log(this.props);
    }

    render () {
        return (
            <div>
                <h1>title</h1>
                <p>You selected the Course with ID: </p>
            </div>
        );
    }
}

export default Course;