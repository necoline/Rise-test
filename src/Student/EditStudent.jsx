import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/InputField';
import DropDownField from '../common/DropDownField';

class EditStudent extends Component {
  state = {
    student: {}    
  };

  setSubmission = () => {
    this.props.updateStudent(this.state.student)
  }

  handleFirstNameChange = event => {
    this.setState({student: { firstName: event.target.value }})
  };

  handleMiddleNameChange = event => {
    this.setState({ student: { middleName: event.target.value }})
  };

  handleLastNameChange = event => {
    this.setState({student: {lastName: event.target.value, id: Date.now().toString()}})
  };

  handlePreferredNameChange = event => {
    this.setState({student: {preferredName: event.target.value }})
  };

  handleGuardianFirstNameChange = event => {
    this.setState({student: {guardianFirstName: event.target.value }})
  };

  handleGuardianLastNameChange = event => {
    this.setState({ student: {guardianLastName: event.target.value }})
  };

  handleEthnicityChange = event => {
    this.setState({student: {ethnicity: event.target.value }})
  };

  // handleFirstNameChange = event => {
  //   this.setState({dob: event.target.value})
  // };
  // TODO: select m/d/yr drop downs that are changed into 

  render() {
    const { student } = this.props
    return (
      <div>
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell">
              <InputField 
                handleChange={this.handleFirstNameChange} 
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
              <DropDownField 
                handleChange={this.handleDobChange} 
                value={student.dob} 
                label="Date of Birth"
                rowRatio="third"/> 
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
  updateStudent: PropTypes.func,
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    preferredName: PropTypes.string.isRequired,
    guardianFirstName: PropTypes.string.isRequired,
    guardianLastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    ethnicity: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    countryOfRefuge: PropTypes.string.isRequired,
    vulnerabilityStatus: PropTypes.string.isRequired,
    teacherName: PropTypes.string.isRequired,
    cpaName: PropTypes.string.isRequired, 
  }).isRequired
};

EditStudent.defaultProps = {
  updateStudent: () => {},
};

export default EditStudent;