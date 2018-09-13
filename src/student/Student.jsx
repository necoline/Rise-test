/*eslint-disable */
import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import firebase from '../firebase';

import Header from '../common/Header';
import StudentContainer from '../containers/StudentContainer'
import TextField from '../common/TextField';

class Student extends Component {
  state = {
    student: null,
    redirect: false
   }

  componentDidMount() {
    const studentRef = firebase.database().ref(`/student/${this.props.match.params.id}`)
    studentRef.on('value', data => {
      this.setState({
        student: data.val(),
        id: this.props.match.params.id
       })
    })
  }

  setRemoveStudent = removeStudent => (event) => {
    event.preventDefault()
    removeStudent(this.state.id)
    this.props.history.push('/roster')
  } 

  render() {
    const { student, id } = this.state

    return student && (
      <div>
        <Header title={"Student Profile"}/>
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
          <Subscribe to={[StudentContainer]}>{({removeStudent}) =>
            <div className="mdc-layout-grid__cell fab-right">
            <Link to={`/student/${id}/edit`}>
              <button className="mdc-fab fab-toolbar" aria-label="edit">
                <span className="mdc-fab__icon material-icons">edit</span>
              </button>
            </Link>
              <button className="mdc-fab fab-toolbar" aria-label="remove" onClick={this.setRemoveStudent(removeStudent)}>
                <span className="mdc-fab__icon material-icons">delete</span>
              </button>
            </div>}
        </Subscribe>  
            <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.firstName}
                id={'firstName'} 
                label="First Name"
                rowRatio="half"/>
              <TextField 
                value={student.middleName}
                id={'middleName'} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.lastName}
                id={'lastName'} 
                label="Last Name"
                rowRatio="half"/>
              <TextField 
                value={student.preferredName}
                id={'preferredName'} 
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.guardianFirstName}
                id={'guardianFirstName'} 
                label="Guardian's First Name"
                rowRatio="half"/>
              <TextField 
                value={student.guardianLastName}
                id={'guardianLastName'} 
                label="Guardian's Last Name"
                rowRatio="half"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Student.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  }).isRequired,
  history: PropTypes.func
};
  
  Student.defaultProps = {
    history: PropTypes.func
  };

export default Student;
/*eslint-disable */