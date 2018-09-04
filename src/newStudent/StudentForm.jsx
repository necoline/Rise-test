import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subscribe } from 'unstated';

import StudentContainer from '../containers/StudentContainer'
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
    // gender: '',
    // grade: '',
    // race: '',
    // ethnicity: '',
    // nationality: '',
    // countryOfRefuge: '',
    // vulnerabilityStatus: '',
    // teacherName: '',
    // cpaName: '',    
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
            <div className="mdc-layout-grid__cell">
              {/* <DropDownField 
                handleChange={this.handleDobChange} 
                value={this.state.dob}
                id={'dob'} 
                label="Date of Birth"
                rowRatio="third"/>  */}
              <DropDownField 
                selected={this.state.gender} 
                options={["female", "male", "other"]}
                id={'gender'} 
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