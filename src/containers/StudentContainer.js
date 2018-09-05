import { Container } from 'unstated';
import firebase from '../firebase';

export default class StudentContainer extends Container {
    state = {
        students: [],
        studentHash: {},
        singleStudent: {}
    }

    fetchAllStudents = () => {
        const ref = firebase.database().ref('student')
        const ids = []
        const hash = {}
        ref.once('value', snapshot => {
            snapshot.forEach(student => {
                ids.push(student.key) 
                hash[student.key] = student.val()
            })
            this.setState({ students: ids, studentHash: hash })
        })
        // studentsRef.on('child_added', snapshot => {
        //   /* Update React state when message is added at Firebase Database */
        //   const student = { data: snapshot.val(), id: snapshot.key };
        //   this.setState({ students: [student].concat(this.state.students) });
        // })
    }
    
    addStudent = (student) => {
        const studentsRef = firebase.database().ref('student');
        studentsRef.push(student);
    };  

    removeStudent = studentId => {
        this.setState({
          students: this.state.students.filter(id => this.state.studentHash[id] !== studentId)
          });

          const studentRef = firebase.database().ref(`/student/${studentId}`);
        studentRef.remove();

    };

    // setSingleStudent = (id, student) => {
    //     this.setState({
    //         singleStudent: { id, student }
    //     })
    // }

    updateStudent = (studentId, studentDetails) => {
        console.log('update', studentId)
        console.log('deets', studentDetails)
        // this.setState({
        //   students: this.state.students.filter(id => this.state.studentHash[id] !== studentId)
        //   });

        const studentRef = firebase.database().ref(`/student/${studentId}`);
        studentRef.update({[studentId]: studentDetails});

    };

    selectors = {
        getAllStudents: () => this.state.students || [],
        getStudentData: (id) => this.state.studentHash[id] || {},
        getAllUnderFive: (ids) => ids.filter(id => this.state.studentHash[id].age < 5)
    }

 }
