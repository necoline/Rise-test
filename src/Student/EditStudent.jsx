// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/InputField';
import DropDownField from '../common/DropDownField';

class EditStudent extends Component {
  state = {
    student: {}    
  };

  // setSubmission = () => {
  //   this.props.updateStudent(this.state.student)
  // }

  // setStudent = (student) => {
  //   this.this.setState({student})
  // }

  handleFirstNameChange = event => {
    // const oldStudent = this.props.student
    console.log('props', this.props.student)
    console.log('name', event.target.value)
    // this.setState({student: {firstName: event.target.value}})
  };

  render() {
    const { student } = this.props
    return (
      <div>
        {/* {this.setStudent(student)} */}
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell">
              <InputField 
                handleChange={this.handleFirstNameChange} 
                // value={student.firstName || this.state.student.firstName} 
                value={student.firstName} 
                label="First Name"
                rowRatio="half"/>
              <InputField 
                handleChange={this.handleMiddleNameChange} 
                value={student.middleName} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <InputField 
                handleChange={this.handleLastNameChange} 
                value={student.lastName} 
                label="Last Name"
                rowRatio="half"/>
              <InputField 
                handleChange={this.handlePreferredNameChange} 
                value={student.preferredName} 
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <InputField 
                handleChange={this.handleGuardianFirstNameChange} 
                value={student.guardianFirstName} 
                label="Guardian's First Name"
                rowRatio="half"/>
              <InputField 
                handleChange={this.handleGuardianLastNameChange} 
                value={student.guardianLastName} 
                label="Guardian's Last Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              {/* <DropDownField 
                handleChange={this.handleDobChange} 
                value={student.dob} 
                label="Date of Birth"
                rowRatio="third"/>  */}
              <DropDownField 
                selected={student.gender} 
                options={["female", "male", "other"]}
                label="Gender"
                rowRatio="half"/>
              <DropDownField 
                selected={student.grade}
                options={["PreK", "Kindergarten", "1", "2", "3", "4", "5", "6" ]}
                label="Grade"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <DropDownField 
                selected={student.race}
                options={["Black", "White/Caucasion", "Hispanic/Latino", "Asian", "Polynesian"]}
                label="Race"
                rowRatio="half"/>
              <InputField 
                handleChange={this.handleEthnicityChange} 
                value={student.ethnicity} 
                label="Ethnicity"
                rowRatio="half"/>
              </div>
            <div className="mdc-layout-grid__cell">
              <button className="submit-button mdc-button mdc-button--raised" onClick={this.setSubmission}>
                Add Student
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditStudent.propTypes = {
  // updateStudent: PropTypes.func,
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

EditStudent.defaultProps = {
  // updateStudent: () => {},
  student: PropTypes.shape({
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    guardianFirstName: '',
    guardianLastName: '',
    id: '',
    gender: '',
    grade: '',
    race: '',
    ethnicity: '',
    nationality: '',
    countryOfRefuge: '',
    vulnerabilityStatus: '',
    teacherName: '',
    cpaName: '', 
  }).isRequired
};

export default EditStudent;