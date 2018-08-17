import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';

class StudentDetails extends Component {

  nothing = () => {}
  render() {
    const { student, editStudent, deleteStudent } = this.props
    return (
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell fab-right">
              <button className="mdc-fab fab-toolbar" aria-label="edit" onClick={() => editStudent(student.id)}>
                  <span className="mdc-fab__icon material-icons">edit</span>
              </button>
              <button className="mdc-fab fab-toolbar" aria-label="delete" onClick={() => deleteStudent(student.id)}>
                <span className="mdc-fab__icon material-icons">delete</span>
              </button>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.firstName} 
                label="First Name"
                rowRatio="half"/>
              <TextField 
                value={student.middleName} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.lastName} 
                label="Last Name"
                rowRatio="half"/>
              <TextField 
                value={student.preferredName} 
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.guardianFirstName} 
                label="Guardian's First Name"
                rowRatio="half"/>
              <TextField 
                value={student.guardianLastName} 
                label="Guardian's Last Name"
                rowRatio="half"/>
            </div>
          </div>
        </div>
    )
  }
}

StudentDetails.propTypes = {
  deleteStudent: PropTypes.func,
  editStudent: PropTypes.func,
  student: PropTypes.shape({
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    preferredName: PropTypes.string,
    guardianFirstName: PropTypes.string,
    guardianLastName: PropTypes.string,
    id: PropTypes.string,
    gender: PropTypes.string,
    grade: PropTypes.string,
    race: PropTypes.string,
    ethnicity: PropTypes.string,
    nationality: PropTypes.string,
    countryOfRefuge: PropTypes.string,
    vulnerabilityStatus: PropTypes.string,
    teacherName: PropTypes.string,
    cpaName: PropTypes.string, 
  }).isRequired

};
  
StudentDetails.defaultProps = {
  deleteStudent: () => {},
  editStudent: () => {},
  };

export default StudentDetails;