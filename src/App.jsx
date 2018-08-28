import React, { Component } from 'react';
// import { withAuthenticator } from 'aws-amplify-react';
import { Route, Switch} from 'react-router-dom';
import { API } from 'aws-amplify';
import Landing from './Landing';
import Roster from './roster/Roster';
import NewStudent from './newStudent/NewStudent';
import Student from './roster/Student';

class App extends Component {
  state = {
      students: []
    }
    
    componentDidMount() {
      API.get('studentsCRUD', '/student').then( students => {
        this.setState({ students });
      })
    }
  
    addStudent = (student) => {
      API.post('studentsCRUD', '/student', {body: student}).then( () => {
        this.setState({ students: [student, ...this.state.students] });
      })
    };
  
    removeStudent = studentId => {
      API.del('studentCRUD', `/student/object/${studentId}`).then( () => {
        this.setState({
          students: this.state.students.filter(student => student.id !== studentId),
        });
      });
    };

  
    render() {
      return (
        <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/roster" 
            component={() => <Roster students={this.state.students}/>}/>
          <Route
            exact
            path="/student/:id"
            component={(props) => <Student removeStudent={this.removeStudent} {...props}/>}/>
          <Route 
            path="/new-student" 
            component={() => <NewStudent addStudent={this.addStudent}/>} />
        </Switch>
        </div>
      )
    }
  }

export default App;