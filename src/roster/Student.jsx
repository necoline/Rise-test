import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import Header from '../common/Header';

class Student extends Component {
  state = {
    student: {}
    // isReady: false,
    // redirect: false
   }
 

  componentDidMount() {
    API.get('studentsCRUD', `/students/object/${this.props.match.params.id}`).then( student => {
      if(student.id){
        this.setState({ student })
        // this.setState({ isReady: true })
      } 
    })
  }

  setRedirect = () => !this.state.redirect ? <Redirect to="/roster" /> : null

  deleteStudent = (id) => {
    console.log('deleting', id)
    this.props.removeStudent(id)
    // this.setState({ redirect: true })
  } 

  render() {
    const { student } = this.state

    return student && (
      <div>
        <Header title={"Student Profile"}/>
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell fab-right">
              <button className="mdc-fab fab-toolbar" aria-label="add">
                <span className="mdc-fab__icon material-icons">edit</span>
              </button>
              <button className="mdc-fab fab-toolbar" aria-label="add" onClick={() => this.deleteStudent(student.id)}>
                <span className="mdc-fab__icon material-icons">delete</span>
              </button>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.firstName} 
                label="First Name"
                rowRatio="half"/>
              <TextField 
                value={student.middleName} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.lastName} 
                label="Last Name"
                rowRatio="half"/>
              <TextField 
                value={student.preferredName} 
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                value={student.guardianFirstName} 
                label="Guardian's First Name"
                rowRatio="half"/>
              <TextField 
                value={student.guardianLastName} 
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
  removeStudent: PropTypes.func
};
  
  Student.defaultProps = {
    removeStudent: () => {},
  };

export default Student;