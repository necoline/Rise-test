import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';

class Form extends Component {
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    guardianFirstName: '',
    guardianLastName: '',
    // dob: 0,
    // gender: '',
    // grade: '',
    id: '',
  };

  setSubmission = () => {
    this.props.submitEntry(this.state)
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

  // handleFirstNameChange = event => {
  //   this.setState({dob: event.target.value})
  // };
  // TODO: select m/d/yr drop downs that are changed into 

  // handleFirstNameChange = event => {
  //   this.setState({gender: event.target.value})
  // };

  // handleFirstNameChange = event => {
  //   this.setState({grade: event.target.value})
  // };

  render() {
    return (
      <div>
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell">
              <TextField 
                handleChange={this.handleFirstNameChange} 
                value={this.state.firstName} 
                label="First Name"
                rowRatio="half"/>
              <TextField 
                handleChange={this.handleMiddleNameChange} 
                value={this.state.middleName} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <TextField 
                handleChange={this.handleLastNameChange} 
                value={this.state.lastName} 
                label="Last Name"
                rowRatio="half"/>
              <TextField 
                handleChange={this.handlePreferredNameChange} 
                value={this.state.preferredName} 
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                handleChange={this.handleGuardianFirstNameChange} 
                value={this.state.guardianFirstName} 
                label="Guardian's First Name"
                rowRatio="half"/>
              <TextField 
                handleChange={this.handleGuardianLastNameChange} 
                value={this.state.guardianLastName} 
                label="Guardian's Last Name"
                rowRatio="half"/>
            </div>
            {/* <div className="mdc-layout-grid__cell">
              <TextField 
                handleChange={this.handleDobChange} 
                value={this.state.dob} 
                label="Date of Birth"
                rowRatio="third"/>
              <DropDownField 
                handleChange={this.handleGenderChange} 
                value={this.state.gender} 
                label="Gender"
                rowRatio="third"/>
              <DropDownField 
                handleChange={this.handleGradeChange} 
                value={this.state.grade} 
                label="Grade"
                rowRatio="third"/>
            </div> */}
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