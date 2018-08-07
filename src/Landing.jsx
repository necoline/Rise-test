import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import { Link } from "react-router-dom";
import Header from './Header';

const Landing = () => (
  <div>
    <Header />
    <div className="mdc-layout-grid__inner body">
      <div className="mdc-layout-grid__cell--span-1 content">
        <Link to="/">
          <button className="mdc-button">Attendance</button>
        </Link>
        <Link to="/roster">
          <button className="mdc-button">Roster</button>
        </Link>
        <Link to="/">
          <button className="mdc-button">Reports</button>
        </Link>
      </div>
    </div>
  </div>
  );

export default withAuthenticator(Landing);