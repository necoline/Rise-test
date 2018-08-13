import React, { Component } from 'react';
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
  
    // addStudent = student => {
    //   API.post('studentsCRUD', '/students', {body: student}).then( () => {
    //     this.setState({ students: [student, ...this.state.students] });
    //   })
    // };
  
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
            path="/roster" 
            component={() => <Roster students={this.state.students} viewStudent={this.viewStudent}/>}/>
          <Route
            path="/roster/:id"
            // component={(props: { match: Match }) => {
            //   const selectedStudent = this.state.student.find(student => props.match.params.id === student.id);
            // return (<Student removeStudent={this.removeStudent} student={selectedStudent} {...props}/>)
            // }}
            component={() => {
              const selectedStudent = this.state.students.find(student => student.id === this.state.selectedStudentId);
              return <Student removeStudent={this.removeStudent} student={selectedStudent} />;
            }}
          />
          <Route 
            path="/new-student" 
            component={() => <NewStudent addStudent={this.addStudent} />} />
        </Switch>
        </div>
      )
    }
  }

export default App;