import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Students extends Component {
    
    setRedirect = (student) => this.props.viewStudent(student);
      
  render() {
    return (
        <ul className="mdc-list">
        {this.props.students.map( student => 
            <div key={student.id}>
                <a onClick={() => this.setRedirect(student)} role="button" tabIndex="0">
                    <li className="mdc-layout-grid__inner mdc-list-item">
                    {student.lastName}, {student.firstName}
                        <div className="mdc-list-item__meta">
                            <i className="material-icons">lens</i>
                        </div>
                    </li>
                </a>
                <li role="separator" className="mdc-list-divider"/> 
            </div>
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
      viewStudent: PropTypes.func,
  };
  
  Students.defaultProps = {
    viewStudent: () => {},
  };

export default Students;