import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import firebase from '../firebase';

import StudentContainer from '../containers/StudentContainer'
import TextField from '../common/TextField';

class StudentDetails extends Component {

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


  deleteStudent = removeStudent => (event) => {
    event.preventDefault()
    removeStudent(this.state.id)
    this.props.history.push('/roster')
  } 

  render() {
    const { student } = this.state

    return student && (
      <div>
        <Header title={"Student Profile"}/>
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
          <Subscribe to={[StudentContainer]}>{({removeStudent}) =>
            <div className="mdc-layout-grid__cell fab-right">
              <button className="mdc-fab fab-toolbar" aria-label="edit" onClick={() => editStudent(student.id)}>
                  <span className="mdc-fab__icon material-icons">edit</span>
              </button>

              <button className="mdc-fab fab-toolbar" aria-label="add" onClick={this.deleteStudent(removeStudent)}>
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
    )
  }
}
  

  
  Student.defaultProps = {
    history: PropTypes.func
  };

export default StudentDetails;