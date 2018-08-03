import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewStudent extends Component {
  state = {
    firstName: '',
    lastName: '',
    id: '',
  };

  handleFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  };

  handleLastNameChange = event => {
    this.setState({lastName: event.target.value, id: Date.now().toString()})
  };

  clearInputs = () => {
    this.setState({firstName: '', lastName: '', id: ''})
  }

  submitEntry = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
    this.clearInputs();
  }

  render() {
    return (
      <div>
          <span>First Name:</span>
          <div className="mdc-text-field">
            <input 
              type="text"
              onChange={this.handleFirstNameChange}
              value={this.state.firstName} 
              id="my-text-field" 
              className="mdc-text-field__input"/>
            <div className="mdc-line-ripple"/>
          </div>
          <span>Last Name:</span>
          <div className="mdc-text-field">
            <input 
              type="text"
              onChange={this.handleLastNameChange} 
              value={this.state.lastName} 
              id="my-text-field" 
              className="mdc-text-field__input"/>
            <div className="mdc-line-ripple"/>
          </div>
        <button className="submit-button mdc-button mdc-button--raised" onClick={this.submitEntry}>
          Add Student
        </button>
      </div>
    );
  }
}

NewStudent.propTypes = {
  addStudent: PropTypes.func,
};

NewStudent.defaultProps = {
  addStudent: () => {},
};

export default NewStudent;