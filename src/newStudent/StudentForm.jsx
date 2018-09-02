import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subscribe } from 'unstated';

import TextField from '../common/TextField';
import StudentContainer from '../containers/StudentContainer'


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

  setSubmission = addStudent => (event) => {
    event.preventDefault()
    addStudent(this.state)
    this.props.proceedToRoster()
  }

  handleChange = ({target}) =>  {
    this.setState({[target.id]: target.value})
  }

  render() {
    return (
      <div>
        <div className="mdc-layout-grid container">
        <Subscribe to={[StudentContainer]}>{({addStudent}) =>
          <form className="mdc-layout-grid__inner" onSubmit={this.setSubmission(addStudent)}>
            <div className="mdc-layout-grid__cell">
              <TextField 
                onChange={this.handleChange} 
                value={this.state.firstName}
                id={'firstName'}
                label="First Name"
                rowRatio="half"/>
              <TextField 
                onChange={this.handleChange}
                value={this.state.middleName}
                id={'middleName'} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <TextField 
                onChange={this.handleChange}
                value={this.state.lastName} 
                id={'lastName'}
                label="Last Name"
                rowRatio="half"/>
              <TextField 
                onChange={this.handleChange}
                value={this.state.preferredName} 
                id={'preferredName'}
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                onChange={this.handleChange}
                value={this.state.guardianFirstName}
                id={'guardianFirstName'}
                label="Guardian's First Name"
                rowRatio="half"/>
              <TextField 
                onChange={this.handleChange}
                value={this.state.guardianLastName}
                id={'guardianLastName'} 
                label="Guardian's Last Name"
                rowRatio="half"/>
            </div>
            {/* <div className="mdc-layout-grid__cell">
              <TextField 
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
                Add Student
              </button>
            </div>
          </form>}
          </Subscribe>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  proceedToRoster: PropTypes.func
};

Form.defaultProps = {
  proceedToRoster: PropTypes.func
};

export default Form;