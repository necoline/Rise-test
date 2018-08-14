import React from 'react';
// import { withAuthenticator } from 'aws-amplify-react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Students from './Students';
import Header from '../common/Header';

const Roster = (props) => (
  <div>
    <Header title={"Roster"}/>
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--align-right">
            <Link to="/new-student">
              <button className="mdc-fab fab-right" aria-label="add">
                <span className="mdc-fab__icon material-icons">add</span>
              </button>
            </Link>
          </div>
        <div className="mdc-layout-grid__cell row">
          <Students students={props.students} viewStudent={props.viewStudent}/>
        </div>
      </div>
    </div>
  </div>
);

Roster.propTypes = {
  students: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    viewStudent: PropTypes.func.isRequired,
  };
  
  // Roster.defaultProps = {
  //   viewStudent: () => {},
  // }

export default Roster;