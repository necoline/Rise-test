import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
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
            <span className="mdc-top-app-bar__title">RISE</span>
            <a href="/" className="material-icons mdc-top-app-bar__navigation-icon right">menu</a>
            <a href="/" className="material-icons mdc-top-app-bar__navigation-icon right">menu</a>
            <a href="/" className="material-icons mdc-top-app-bar__navigation-icon right">menu</a>
            </section>
        </div>
        </header>
    );
  }
}

export default withAuthenticator(Header);