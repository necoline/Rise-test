import React from 'react';
import PropTypes from 'prop-types';
import { Subscribe } from 'unstated';

import Form from './Form';
import Header from '../common/Header';
import StudentContainer from '../containers/StudentContainer';

  const NewStudent = (props) => (
      <div>
        <Header title={'New Student'}/>
        <div className="mdc-layout-grid container">
          <Subscribe to={[StudentContainer]}>{({addStudent}) =>
            <Form formAction={addStudent} proceedToRoster={() => props.history.push('/roster')} submitText={"Add Student"} />}
          </Subscribe>
        </div>
      </div>
    );

NewStudent.propTypes = {
  history: PropTypes.obj
};

NewStudent.defaultProps = {
  history: PropTypes.obj
};

export default NewStudent;