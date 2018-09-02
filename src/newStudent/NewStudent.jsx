import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import StudentForm from './StudentForm';


class NewStudent extends Component {
  
  renderRedirect = () => this.state.redirect ? <Redirect to='/roster' /> : null  

  render() {
    return (
      <div>
        {/* {this.renderRedirect()} */}
        <Header title={"New Student"}/>
        <StudentForm proceedToRoster={() => this.props.history.push('/roster')} />
      </div>
    );
  }
}

NewStudent.propTypes = {
  history: PropTypes.func
};

NewStudent.defaultProps = {
  history: PropTypes.func
};

export default NewStudent;