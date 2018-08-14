import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { API } from 'aws-amplify';
import Landing from './Landing';
import Roster from './roster/Roster';
import NewStudent from './newStudent/NewStudent';
import Student from './roster/Student';

class App extends Component {
  state = {
      students: [],
      student: {},
      redirect: false
    }
    
    componentDidMount() {
      API.get('studentsCRUD', '/students').then( students => {
        this.setState({ students });
      })
    }
  
    addStudent = student => {
      API.post('studentsCRUD', '/students', {body: student}).then( () => {
        this.setState({ students: [student, ...this.state.students] });
      })
    };
  
    removeStudent = studentId => {
      API.del('studentsCRUD', `/students/object/${studentId}`).then( () => {
        this.setState({
          students: this.state.students.filter(student => student.id !== studentId),
        });
      });
    };

    viewStudent = student => {
      this.setState({ student, redirect: true });
    }

    renderRedirect = () => this.state.redirect ? <Redirect to='/roster/:id' student={this.state.student} removeStudent={this.removeStudent}/> : null
  
    render() {
      return (
        <div className="app">
        {this.renderRedirect()}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/roster" 
            component={() => <Roster students={this.state.students} viewStudent={this.viewStudent}/>}/>
          <Route
            exact
            path="/student/:id"
            component={(props) => <Student removeStudent={this.removeStudent} {...props}/>}/>
          <Route 
            path="/new-student" 
            component={() => <NewStudent addStudent={this.addStudent} />} />
        </Switch>
        </div>
      )
    }
  }

  App.propTypes = {
    match: PropTypes.string
    };

    App.defaultProps = {
      match: '',
  };

export default App;