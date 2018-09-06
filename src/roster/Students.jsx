import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Subscribe } from 'unstated';

import StudentContainer from '../containers/StudentContainer'

class Students extends Component {

    studentName = (id, container) => {
        const { firstName, lastName } = container.selectors.getStudentData(id)
        return `${lastName}, ${firstName}`
    }

  render() {
    return (
        <ul className="mdc-list">
        <Subscribe to={[StudentContainer]}>{container =>
        <div>
            {container.selectors.getAllStudents().map(id => 
            <div key={id}>
                <Link to={`/student/${id}`}>
                    <li className="mdc-layout-grid__inner mdc-list-item">
                    {this.studentName(id, container)}
                        <div className="mdc-list-item__meta">
                            <i className="material-icons">lens</i>
                        </div>
                    </li>
                </Link>
                <li role="separator" className="mdc-list-divider"/> 
            </div>)}
            </div>}
        </Subscribe>     
        </ul>
        )
    }
};

export default Students;