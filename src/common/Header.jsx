import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header className="mdc-top-app-bar mdc-top-app-bar fixed">
    <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a href="/" className="material-icons mdc-top-app-bar__navigation-icon right">menu</a>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-middle">
          <span className="title">{props.title}</span>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
          <a href="/" className="material-icons mdc-top-app-bar__navigation-icon">account_circle</a>
        </section>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;