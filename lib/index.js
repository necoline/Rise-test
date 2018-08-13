import React from 'react';
import { render } from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configuration from './aws-exports';

Amplify.configure(configuration);

var renderApp = function renderApp() {
  render(React.createElement(
    BrowserRouter,
    { key: Math.random() },
    React.createElement(App, null)
  ), document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', function () {
    renderApp();
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', 'src/index.jsx');
}();

;