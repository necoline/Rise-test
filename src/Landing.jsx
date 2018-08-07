import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import Students from './Students';
import NewStudent from './NewStudent';

class Landing extends Component {
state = {
    students: []
  }
  
  addStudent = (student) => {
    this.setState({ students: [student, ...this.state.students] });
  };

  removeStudent = studentId => {
    this.setState({
        students: this.state.students.filter(student => student.id !== studentId),
    });
  };

  render() {
    return (
      <div className="mdc-layout-grid__inner body">
        <div className="mdc-layout-grid__cell--span-1 header">
          <h2 className="title">Welcome to RISE International</h2>
        </div>
        <div className="mdc-layout-grid__cell--span-1 content">
            <NewStudent addStudent={this.addStudent} />
            <h3>Student Roster</h3>
            <Students
              students={this.state.students}
              onRemove={this.removeStudent}
            />
        </div>
      </div>
    );
  }
}

export default withAuthenticator(Landing);