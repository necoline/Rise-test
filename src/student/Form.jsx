import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputField from '../common/InputField';


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
  };

  setSubmission = formAction => (event) => {
    event.preventDefault()
    formAction(this.state)
    this.props.proceedToRoster()
  }

  handleChange = ({target}) =>  {
    this.setState({[target.id]: target.value})
  }

  render() {
    return (
          <form className="mdc-layout-grid__inner" onSubmit={this.setSubmission(this.props.formAction)}>
            <div className="mdc-layout-grid__cell">
              <InputField 
                onChange={this.handleChange} 
                value={this.state.firstName}
                id={'firstName'}
                label="First Name"
                rowRatio="half"/>
              <InputField 
                onChange={this.handleChange}
                value={this.state.middleName}
                id={'middleName'} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <InputField 
                onChange={this.handleChange}
                value={this.state.lastName} 
                id={'lastName'}
                label="Last Name"
                rowRatio="half"/>
              <InputField 
                onChange={this.handleChange}
                value={this.state.preferredName} 
                id={'preferredName'}
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <InputField 
                onChange={this.handleChange}
                value={this.state.guardianFirstName}
                id={'guardianFirstName'}
                label="Guardian's First Name"
                rowRatio="half"/>
              <InputField 
                onChange={this.handleChange}
                value={this.state.guardianLastName}
                id={'guardianLastName'} 
                label="Guardian's Last Name"
                rowRatio="half"/>
            </div>
            {/* <div className="mdc-layout-grid__cell">
              <InputField 
                handleChange={this.handleDobChange} 
                value={this.state.dob}
                id={'dob'} 
                label="Date of Birth"
                rowRatio="third"/>
              <DropDownField 
                handleChange={this.handleGenderChange} 
                value={this.state.gender}
                id{'gender'} 
                label="Gender"
                rowRatio="third"/>
              <DropDownField 
                handleChange={this.handleGradeChange} 
                value={this.state.grade} 
                id={'grade'}
                label="Grade"
                rowRatio="third"/>
            </div> */}

            <div className="mdc-layout-grid__cell">
              <button className="submit-button mdc-button mdc-button--raised">
                {this.props.submitText}
              </button>
            </div>
          </form>
    );
  }
}

Form.propTypes = {
  submitText: PropTypes.string.isRequired,
  formAction: PropTypes.func.isRequired,
  proceedToRoster: PropTypes.func

};

Form.defaultProps = {
  proceedToRoster: PropTypes.func
};

export default Form;