import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'unstated';

import Landing from './Landing';
import Roster from './roster/Roster';
import NewStudent from './newStudent/NewStudent';
import Student from './roster/Student';
import UpdateStudent from './student/UpdateStudent';

import StudentContainer from './containers/StudentContainer'

const studentContainer = new StudentContainer


class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    studentContainer.fetchAllStudents()
  }

  render() {
    return (
      <div className="app">
        <Provider inject={[studentContainer]}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/roster"
              component={Roster} />
            <Route
              exact
              path="/student/:id"
              component={Student} />
            <Route
              exact
              path="/student/:id/edit"
              component={UpdateStudent} />
            <Route
              path="/student-form"
              component={NewStudent} />
          </Switch>
        </Provider>
      </div>
    )
  }
}

export default App;