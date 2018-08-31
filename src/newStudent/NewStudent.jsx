import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import StudentForm from './StudentForm';

class NewStudent extends Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    console.log('setting redirect')
    this.setState({
      redirect: true
    })
  }

  submitEntry = (student) => {
    this.props.addStudent(student);
    this.setRedirect();
  }

  renderRedirect = () => {
    console.log('hitting', this.state.redirect)
   return  this.state.redirect ?  <Redirect to='/roster' /> : null
  }
  

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Header title={"New Student"}/>
        <StudentForm submitEntry={this.submitEntry}/>
      </div>
    );
  }
}

NewStudent.propTypes = {
  addStudent: PropTypes.func,
};

NewStudent.defaultProps = {
  addStudent: () => {},
};

export default NewStudent;