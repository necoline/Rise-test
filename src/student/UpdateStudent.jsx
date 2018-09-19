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
    this.props.history.push('/roster')
  }

  handleChange = ({target}) =>  {
    this.setState({[target.id]: target.value})
  }

  render() {
    return (
      <div>
        <Header title={'Update Student'}/>
        <div className="mdc-layout-grid container">
        <Subscribe to={[StudentContainer]}>{({updateStudent}) =>
          <form className="mdc-layout-grid__inner" onSubmit={this.setSubmission(updateStudent)}>
              <div className="mdc-layout-grid__cell form">
                <InputField 
                  onChange={this.handleChange}
                  value={this.state.firstName}
                  id={'firstName'}
                  size={'input-large'} 
                  label="First Name"/>
                <InputField 
                  onChange={this.handleChange}
                  value={this.state.middleName}
                  id={'middleName'} 
                  size={'input-large'} 
                  label="Middle Name"/>
                <InputField 
                  onChange={this.handleChange}
                  value={this.state.lastName} 
                  id={'lastName'}
                  label="Last Name"/>
                <InputField 
                  onChange={this.handleChange}
                  value={this.state.preferredName} 
                  id={'preferredName'}
                  label="Preferred Name"/>
                <InputField 
                  onChange={this.handleChange}
                  value={this.state.guardianFirstName}
                  id={'guardianFirstName'}
                  label="Guardian's First Name"/>
                <InputField 
                  onChange={this.handleChange}
                  value={this.state.guardianLastName}
                  id={'guardianLastName'} 
                  label="Guardian's Last Name"/>
              </div>
            <div className="mdc-layout-grid__cell grid-center">
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
  history: PropTypes.func
};

UpdateStudentDetails.defaultProps = {
  history: () => {}
};

export default UpdateStudentDetails;
