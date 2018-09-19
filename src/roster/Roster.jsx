import React from 'react';
import { Link } from "react-router-dom";

import Students from './Students';
import Header from '../common/Header';


const Roster = () => (
  <div>
    <Header title="Roster"/>
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell page-header">
            <span className='page-title'> Standard 1 </span>
            <Link to="/student-form">
              <button className="mdc-fab fab-right" aria-label="add">
                <span className="mdc-fab__icon material-icons">add</span>
              </button>
            </Link>
          </div>
        <div className="mdc-layout-grid__cell row">
          <Students />
        </div>
      </div>
    </div>
  </div>
);

export default Roster;