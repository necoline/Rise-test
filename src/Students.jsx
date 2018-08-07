import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Students extends Component {

    nothing = () => {}

  render() {
      const { onRemove, students } = this.props;
    return (
        <ul className="mdc-list">              
        {students.map( student => 
            <li className="mdc-layout-grid__inner mdc-list-item" key={student.id}>
            {student.lastName}, {student.firstName}
            <button 
                className="delete-btn mdc-button red mdc-button--raised"
                onClick={() => onRemove(student.id)}> 
                Delete</button>
            </li>
        )}      
        </ul>
        )
    }
};

Students.propTypes = {
    students: PropTypes.arrayOf(
        PropTypes.shape({
          firstName: PropTypes.string.isRequired,
          lastName: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
      onRemove: PropTypes.func.isRequired,
};

export default Students;