import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import { Link } from "react-router-dom";
import Header from './Header';

const Landing = () => (
  <div>
    <Header />
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell row">
          <Link to="/">
            <button className="mdc-button mdc-button--raised">Attendance</button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell row">
          <Link to="/roster">
            <button className="mdc-button mdc-button--raised">Roster</button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell row">
          <Link to="/">
            <button className="mdc-button mdc-button--raised">Reports</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );

export default withAuthenticator(Landing);