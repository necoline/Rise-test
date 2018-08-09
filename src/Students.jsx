import React from 'react';
import PropTypes from 'prop-types';

const Students = (props) => (
    <ul className="mdc-list">              
        {props.students.map( student => 
            <div>
                <li className="mdc-layout-grid__inner mdc-list-item" key={student.id}>
                {student.lastName}, {student.firstName}
                    <div className="mdc-list-item__meta">
                        <i className="material-icons">lens</i>
                    </div>
                </li>
                <li role="separator" className="mdc-list-divider"/> 
            </div>
        )}     
    </ul>
)

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