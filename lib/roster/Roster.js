import React from 'react';
// import { withAuthenticator } from 'aws-amplify-react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Students from './Students';
import Header from '../common/Header';

var Roster = function Roster(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(Header, { title: "Roster" }),
    React.createElement(
      'div',
      { className: 'mdc-layout-grid container' },
      React.createElement(
        'div',
        { className: 'mdc-layout-grid__inner' },
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__cell--align-right' },
          React.createElement(
            Link,
            { to: '/new-student' },
            React.createElement(
              'button',
              { className: 'mdc-fab fab-right', 'aria-label': 'add' },
              React.createElement(
                'span',
                { className: 'mdc-fab__icon material-icons' },
                'add'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__cell row' },
          React.createElement(Students, { students: props.students, viewStudent: props.viewStudent })
        )
      )
    )
  );
};

Roster.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  viewStudent: PropTypes.func.isRequired
};

// Roster.defaultProps = {
//   viewStudent: () => {},
// }

var _default = Roster;
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Roster, 'Roster', 'src/roster/Roster.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/roster/Roster.jsx');
}();

;