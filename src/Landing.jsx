import React, { Component } from 'react';
// import Students from './Students';
import NewStudent from './NewStudent';

class Landing extends Component {
state = {
    students: []
  }
  
  addStudent = student => {
    this.setState({ students: [student, ...this.state.students] });
  };

  removeStudent = student => {
    this.setState({
        students: this.state.students.filter(other => other.id !== student.id),
    });
  };

  render() {
    return (
      <div className="Landing">
        <NewStudent onSubmit={this.addStudent} />
        {/* <Students
          title="Roster"
          students={this.state.students}
          onRemove={this.removeStudent}
        /> */}
        <h2>Student roster!</h2>
      </div>
    );
  }
}

export default Landing;