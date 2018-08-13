import React from 'react';
import PropTypes from 'prop-types';

var Header = function Header(props) {
  return React.createElement(
    'header',
    { className: 'mdc-top-app-bar mdc-top-app-bar fixed' },
    React.createElement(
      'div',
      { className: 'mdc-top-app-bar__row' },
      React.createElement(
        'section',
        { className: 'mdc-top-app-bar__section mdc-top-app-bar__section--align-start' },
        React.createElement(
          'a',
          { href: '/', className: 'material-icons mdc-top-app-bar__navigation-icon right' },
          'menu'
        )
      ),
      React.createElement(
        'section',
        { className: 'mdc-top-app-bar__section mdc-top-app-bar__section--align-middle' },
        React.createElement(
          'span',
          { className: 'title' },
          props.title
        )
      ),
      React.createElement(
        'section',
        { className: 'mdc-top-app-bar__section mdc-top-app-bar__section--align-end' },
        React.createElement(
          'a',
          { href: '/', className: 'material-icons mdc-top-app-bar__navigation-icon' },
          'account_circle'
        )
      )
    )
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

var _default = Header;
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', 'src/common/Header.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/common/Header.jsx');
}();

;