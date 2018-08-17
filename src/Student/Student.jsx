import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Header from '../common/Header';
import StudentDetails from './StudentDetails';
import EditStudent from './EditStudent';

class Student extends Component {
  state = {
    student: null,
    redirect: false,
    isEditing: false
   }
 

  componentDidMount() {
    API.get('studentsCRUD', `/students/object/${this.props.match.params.id}`).then( student => {
      if(student.id){
        this.setState({ student })
      } 
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  deleteStudent = (id) => {
    this.props.removeStudent(id)
    this.setRedirect();
  } 

  editStudent = () => {
    this.setState({ isEditing: true })
  }

  renderRedirect = () => this.state.redirect || !this.state.student ?  <Redirect to='/roster' /> : null;

  render() {
    const { student, isEditing } = this.state

    return student && (
      <div>
        {this.renderRedirect()}
        <Header title={"Student Profile"}/>
        {isEditing ?
        <StudentDetails student={student} deleteStudent={this.deleteStudent} editStudent={this.editStudent}/> :
        <EditStudent student={student} updateStudent={this.updateStudent} submitText="Save Changes"/>
        }
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