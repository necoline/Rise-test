import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import Header from '../common/Header';

class Student extends Component {

nothing = () => {}
  render() {
    const { firstName, middleName, lastName, preferredName, guardianFirstName, guardianLastName} = this.props.student
    return (
      <div>
        <Header title={"Student Profile"}/>
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell fab-right">
              <button className="mdc-fab fab-toolbar" aria-label="add">
                <span className="mdc-fab__icon material-icons">edit</span>
              </button>
              <button className="mdc-fab fab-toolbar" aria-label="add" onClick={this.props.removeStudent}>
                <span className="mdc-fab__icon material-icons">delete</span>
              </button>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                value={firstName} 
                label="First Name"
                rowRatio="half"/>
              <TextField 
                value={middleName} 
                label="Middle Name"
                rowRatio="half"/>
              </div>
              <div className="mdc-layout-grid__cell">
              <TextField 
                value={lastName} 
                label="Last Name"
                rowRatio="half"/>
              <TextField 
                value={preferredName} 
                label="Preferred Name"
                rowRatio="half"/>
            </div>
            <div className="mdc-layout-grid__cell">
              <TextField 
                value={guardianFirstName} 
                label="Guardian's First Name"
                rowRatio="half"/>
              <TextField 
                value={guardianLastName} 
                label="Guardian's Last Name"
                rowRatio="half"/> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Student.propTypes = {
  student: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        middleName: PropTypes.string,
        lastName: PropTypes.string.isRequired,
        preferredName: PropTypes.string,
        guardianFirstName: PropTypes.string.isRequired,
        guardianLastName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    removeStudent: PropTypes.func,
  };
  
  Student.defaultProps = {
    removeStudent: () => {},
  };

export default Student;