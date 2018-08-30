import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import Roster from './roster/Roster';
import NewStudent from './newStudent/NewStudent';
import Student from './roster/Student';
import firebase from './firebase';

class App extends Component {
  state = {
      students: []
    }
   
    componentDidMount() {
      const studentsRef = firebase.database().ref('student').orderByKey().limitToLast(100);
      studentsRef.on('child_added', snapshot => {
        /* Update React state when message is added at Firebase Database */
        const student = { data: snapshot.val(), id: snapshot.key };
        this.setState({ students: [student].concat(this.state.students) });
      })
    }
  
    addStudent = (student) => {
      // post new students
      const studentsRef = firebase.database().ref('student');
      studentsRef.push(student);
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
      console.log('state', this.state.students)
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