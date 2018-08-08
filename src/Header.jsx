import React, { Component } from 'react';
import { API } from 'aws-amplify';

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
              <span className="title">RISE</span>
              </section>
              <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <a href="/" className="material-icons mdc-top-app-bar__navigation-icon right">account_circle</a>
              </section>
          </div>
        </header>
    );
  }
}

export default Header;