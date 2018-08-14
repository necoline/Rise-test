import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Students extends Component {
    stop = () => {}
      
  render() {
    return (
        <ul className="mdc-list">
        {this.props.students.map( student => 
            <div key={student.id}>
                <Link to={`/student/${student.id}`}>
                    <li className="mdc-layout-grid__inner mdc-list-item">
                    {student.lastName}, {student.firstName}
                        <div className="mdc-list-item__meta">
                            <i className="material-icons">lens</i>
                        </div>
                    </li>
                </Link>
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
  };
  

export default Students;