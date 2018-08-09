import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { API } from 'aws-amplify';
import Landing from './Landing';
import Roster from './Roster';
import NewStudent from './NewStudent';


// const App = () => (
//   <div className="app">
//     <Route exact path="/" component={Landing} />
//     <Route exact path="/roster" component={Roster} />
//     <Route exact path="/new-student" component={NewStudent} />
//   </div>
// );

class App extends Component {
  state = {
      students: []
    }
    
    componentDidMount() {
      API.get('studentsCRUD', '/students').then( students => {
        this.setState({ students });
      })
    }
  
    addStudent = (student) => {
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
  
    render() {
      return (
        <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/roster" component={() => <Roster students={this.state.students} />}/>
          <Route exact path="/new-student" component={NewStudent} addStudent={this.addStudent} />
        </Switch>
        </div>
      )
    }
  }

export default App;