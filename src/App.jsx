import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import Roster from './roster/Roster';
import NewStudent from './newStudent/NewStudent';
import Student from './roster/Student';

class App extends Component {
  state = {
      students: []
    }
    
    componentDidMount() {
      // get all students
    }
  
    addStudent = (student) => {
      // post new students
        this.setState({ students: [student, ...this.state.students] });
      // })
    };
  
    removeStudent = studentId => {
      // delete students given an id
        this.setState({
          students: this.state.students.filter(student => student.id !== studentId),
        });
      // });
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