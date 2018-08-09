import React, { Component } from 'react';
import { API } from 'aws-amplify';
import PropTypes from 'prop-types';

class Header extends Component {
  
  componentDidMount() {
    API.get('studentsCRUD', '/students').then( students => {
      this.setState({ students });
    })
  }

  render() {
    return (
        <header className="mdc-top-app-bar mdc-top-app-bar fixed">
          <div className="mdc-top-app-bar__row">
              <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <a href="/" className="material-icons mdc-top-app-bar__navigation-icon right">menu</a>
              </section>
              <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-middle">
                <span className="title">{this.props.title}</span>
              </section>
              <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                <a href="/" className="material-icons mdc-top-app-bar__navigation-icon">account_circle</a>
              </section>
          </div>
        </header>
    );
  }
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;