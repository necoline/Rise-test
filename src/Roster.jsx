import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import { API } from 'aws-amplify';
import Students from './Students';
import NewStudent from './NewStudent';

class Roster extends Component {
state = {
    students: []
  }
  
  componentDidMount() {
    API.get('studentsCRUD', '/students').then( students => {
      this.setState({ students });
    })
  }

  addStudent = (student) => {
    API.post('studentsCRUD', '/students', {body: student}).then( () => {
      this.setState({ students: [student, ...this.state.students] });
    })
  };

  removeStudent = studentId => {
    API.del('studentsCRUD', `/students/object/${studentId}`).then( () => {
      this.setState({
        students: this.state.students.filter(student => student.id !== studentId),
      });
    });
  };

  render() {
    return (
      <div className="mdc-layout-grid__inner body">
        <div className="mdc-layout-grid__cell--span-1">
          <h2 className="title">Welcome to RISE International</h2>
        </div>
        <div className="mdc-layout-grid__cell--span-1">
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

export default withAuthenticator(Roster);