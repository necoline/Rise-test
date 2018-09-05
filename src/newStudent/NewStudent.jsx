import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import StudentForm from './StudentForm';


  const NewStudent = (props) => (
      <div>
        <Header title={'New Student'}/>
        <StudentForm proceedToRoster={() => props.history.push('/roster')} />
      </div>
    );

NewStudent.propTypes = {
  history: PropTypes.obj
};

NewStudent.defaultProps = {
  history: PropTypes.obj
};

export default NewStudent;