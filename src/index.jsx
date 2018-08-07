import React from 'react';
import { render } from 'react-dom';
import Amplify from 'aws-amplify';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import configuration from './aws-exports';

Amplify.configure(configuration);

const App = () => (
  <HashRouter>
    <div className="mdc-layout-grid app">
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));