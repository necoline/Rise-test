import React, { Component } from 'react';


class NewStudent extends Component {

    addStudent = student => {
        this.setState({ students: [student, ...this.state.students] });
      };

  render() {
    return (
      <div>
        <h2>Add Students</h2>
      </div>
    );
  }
}

export default NewStudent;