import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/InputField';
import DropDownField from '../common/DropDownField';

class Form extends Component {
  state = {
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    guardianFirstName: '',
    guardianLastName: '',
    // dob: 0,
    gender: '',
    grade: '',
    race: '',
    ethnicity: '',
    nationality: '',
    countryOfRefuge: '',
    vulnerabilityStatus: '',
    teacherName: '',
    cpaName: '',    
  };

  setSubmission = () => {
    this.props.submitEntry(this.state)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      id: '',
      firstName: '',
      middleName: '',
      lastName: '',
      preferredName: '',
      guardianFirstName: '',
      guardianLastName: '',
      // dob: 0,
      gender: '',
      grade: '',
      race: '',
      ethnicity: '',
      nationality: '',
      countryOfRefuge: '',
      vulnerabilityStatus: '',
      teacherName: '',
      cpaName: '',
    })
  }

  handleFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  };

  handleMiddleNameChange = event => {
    this.setState({middleName: event.target.value})
  };

  handleLastNameChange = event => {
    this.setState({lastName: event.target.value, id: Date.now().toString()})
  };

  handlePreferredNameChange = event => {
    this.setState({preferredName: event.target.value})
  };

  handleGuardianFirstNameChange = event => {
    this.setState({guardianFirstName: event.target.value})
  };

  handleGuardianLastNameChange = event => {
    this.setState({guardianLastName: event.target.value})
  };

  handleEthnicityChange = event => {
    this.setState({ethnicity: event.target.value})
  };
  // handleFirstNameChange = event => {
  //   this.setState({dob: event.target.value})
  // };
  // TODO: select m/d/yr drop downs that are changed into 

  render() {
    return (
      <div>
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell">
              <InputField 
                handleChange={this.handleFirstNameChange} 
                value={this.state.firstName} 
                label="First Name"
                rowRatio="half"/>
              <InputField 
                handleChange={this.handleMiddleNameChange} 
                value={this.state.middleName} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <InputField 
                handleChange={this.handleLastNameChange} 
                value={this.state.lastName} 
                label="Last Name"
                rowRatio="half"/>
              <InputField 
                handleChange={this.handlePreferredNameChange} 
                value={this.state.preferredName} 
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <InputField 
                handleChange={this.handleGuardianFirstNameChange} 
                value={this.state.guardianFirstName} 
                label="Guardian's First Name"
                rowRatio="half"/>
              <InputField 
                handleChange={this.handleGuardianLastNameChange} 
                value={this.state.guardianLastName} 
                label="Guardian's Last Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              {/* <DropDownField 
                handleChange={this.handleDobChange} 
                value={this.state.dob} 
                label="Date of Birth"
                rowRatio="third"/>  */}
              <DropDownField 
                selected={this.state.gender} 
                options={["female", "male", "other"]}
                label="Gender"
                rowRatio="half"/>
              <DropDownField 
                selected={this.state.grade}
                options={["PreK", "Kindergarten", "1", "2", "3", "4", "5", "6" ]}
                label="Grade"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <DropDownField 
                selected={this.state.race}
                options={["Black", "White/Caucasion", "Hispanic/Latino", "Asian", "Polynesian"]}
                label="Race"
                rowRatio="half"/>
              <InputField 
                handleChange={this.handleEthnicityChange} 
                value={this.state.ethnicity} 
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

Form.propTypes = {
  submitEntry: PropTypes.func,
};

Form.defaultProps = {
  submitEntry: () => {},
};

export default Form;