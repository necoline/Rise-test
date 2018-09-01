import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import StudentForm from './StudentForm';


class NewStudent extends Component {
  
  state = {
    student: {}
  };

  submitEntry = (student) => {
    this.props.addStudent(student)
    this.props.history.push('/roster')
  }

  renderRedirect = () => this.state.redirect ? <Redirect to='/roster' /> : null

  // renderRedirect = () => {  
  //   if (this.state.redirect) {
  //     this.props.addStudent(this.state.student)
  //     return <Redirect to='/roster' />
  //   } 
  //     return false;
    
  // }  

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
  history: PropTypes.func
};

NewStudent.defaultProps = {
  addStudent: () => {},
  history: PropTypes.func
};

export default NewStudent;