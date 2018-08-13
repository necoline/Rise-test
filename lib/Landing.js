import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import { Link } from "react-router-dom";
import Header from './common/Header';

var Landing = function Landing() {
  return React.createElement(
    'div',
    null,
    React.createElement(Header, { title: "RISE" }),
    React.createElement(
      'div',
      { className: 'mdc-layout-grid container' },
      React.createElement(
        'div',
        { className: 'mdc-layout-grid__inner' },
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__cell row' },
          React.createElement(
            Link,
            { to: '/' },
            React.createElement(
              'button',
              { className: 'mdc-button mdc-button--raised' },
              'Attendance'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__cell row' },
          React.createElement(
            Link,
            { to: '/roster' },
            React.createElement(
              'button',
              { className: 'mdc-button mdc-button--raised' },
              'Roster'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__cell row' },
          React.createElement(
            Link,
            { to: '/' },
            React.createElement(
              'button',
              { className: 'mdc-button mdc-button--raised' },
              'Reports'
            )
          )
        )
      )
    )
  );
};

var _default = withAuthenticator(Landing);

export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Landing, 'Landing', 'src/Landing.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Landing.jsx');
}();

;