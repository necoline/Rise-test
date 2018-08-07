import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import Roster from './Roster';

const App = () => (
  <div className="mdc-layout-grid app">
    <Route exact path="/" component={Landing} />
    <Route exact path="/roster" component={Roster} />
  </div>
);

export default App;