import React from 'react';
import { render } from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configuration from './aws-exports';

Amplify.configure(configuration);

const renderApp = () => {
  render(
    <BrowserRouter key={Math.random()}>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}