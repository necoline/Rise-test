import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Students extends Component {

    nothing = () => {}

  render() {
      const { students } = this.props;
    return (
        <ul className="mdc-list">              
        {students.map( student => 
            <li className="mdc-layout-grid__inner mdc-list-item" key={student.id}>
            {student.lastName}, {student.firstName}
                <div className="mdc-list-item__meta">
                    <i className="material-icons">lens</i>
                </div>
            </li>
        )}     
        <li role="separator" className="mdc-list-divider"/> 
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
};

export default Students;