import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import PropTypes from 'prop-types';

import firebase from '../firebase';
import Header from '../common/Header';
import InputField from '../common/InputField';
import StudentContainer from '../containers/StudentContainer'

class UpdateStudentDetails extends Component {
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
  }

  componentDidMount() {
    const studentRef = firebase.database().ref(`/student/${this.props.match.params.id}`)
    studentRef.on('value', data => {
      this.setState(data.val())
    })
  }

  setSubmission = updateStudent => (event) => {
    event.preventDefault()
    const id = this.props.match.params.id
    updateStudent(id, this.state)
    // this.props.proceedToRoster()
  }

  handleChange = ({target}) =>  {
    this.setState({[target.id]: target.value})
  }

  render() {
    return (
      <div>
        <Header title={'Update Student'}/>
        <div className="mdc-layout-grid container">
        <Subscribe to={[StudentContainer]}>{container =>
          <form className="mdc-layout-grid__inner" onSubmit={this.setSubmission(container.updateStudent)}>
            <div>
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
            </div>

            <div className="mdc-layout-grid__cell">
              <button type="submit" className="submit-button mdc-button mdc-button--raised">
                Save Changes
              </button>
            </div>
          </form>}
          </Subscribe>
        </div>
      </div>
    );
  }
}

UpdateStudentDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  }).isRequired,
  // proceedToRoster: PropTypes.func
};

// UpdateStudent.defaultProps = {
//   proceedToRoster: PropTypes.func
// };



export default function UpdateStudent(props) {
  return <Subscribe to={[StudentContainer]}>{container =>
  <UpdateStudentDetails studentContainer={container} {...props} />
  }</Subscribe>
}