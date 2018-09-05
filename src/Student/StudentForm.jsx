import React from 'react';
import PropTypes from 'prop-types';

import Header from '../common/Header';
import UpdateStudent from './UpdateStudent';


  const StudentForm = (props) => (
      <div>
        <Header title={'Update Student'}/>
        {/* <AddForm proceedToRoster={() => props.history.push('/roster')} /> */}
        <UpdateStudent proceedToRoster={() => props.history.push('/roster')}/>
      </div>
    );

StudentForm.propTypes = {
  history: PropTypes.obj
};

StudentForm.defaultProps = {
  history: PropTypes.obj
};

export default StudentForm;