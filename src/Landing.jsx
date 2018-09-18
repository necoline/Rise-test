import React from 'react';
import { Link } from "react-router-dom";
import Header from './common/Header';

const Landing = () => (
  <div>
    <Header title={"RISE"}/>
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell row grid-center">
          <Link to="/">
            <button className="mdc-button mdc-button--raised">Attendance</button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell row grid-center">
          <Link to="/roster">
            <button className="mdc-button mdc-button--raised">Roster</button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell row grid-center">
          <Link to="/">
            <button className="mdc-button mdc-button--raised">Reports</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );

export default Landing;