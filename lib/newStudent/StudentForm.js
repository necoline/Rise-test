function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      preferredName: '',
      guardianFirstName: '',
      guardianLastName: '',
      // dob: 0,
      // gender: '',
      // grade: '',
      id: ''
    }, _this.setSubmission = function () {
      var _this2;

      return (_this2 = _this).__setSubmission__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleFirstNameChange = function () {
      var _this3;

      return (_this3 = _this).__handleFirstNameChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleMiddleNameChange = function () {
      var _this4;

      return (_this4 = _this).__handleMiddleNameChange__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleLastNameChange = function () {
      var _this5;

      return (_this5 = _this).__handleLastNameChange__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handlePreferredNameChange = function () {
      var _this6;

      return (_this6 = _this).__handlePreferredNameChange__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.handleGuardianFirstNameChange = function () {
      var _this7;

      return (_this7 = _this).__handleGuardianFirstNameChange__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.handleGuardianLastNameChange = function () {
      var _this8;

      return (_this8 = _this).__handleGuardianLastNameChange__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Form.prototype.__setSubmission__REACT_HOT_LOADER__ = function __setSubmission__REACT_HOT_LOADER__() {
    this.props.submitEntry(this.state);
  };

  Form.prototype.__handleFirstNameChange__REACT_HOT_LOADER__ = function __handleFirstNameChange__REACT_HOT_LOADER__(event) {
    this.setState({ firstName: event.target.value });
  };

  Form.prototype.__handleMiddleNameChange__REACT_HOT_LOADER__ = function __handleMiddleNameChange__REACT_HOT_LOADER__(event) {
    this.setState({ middleName: event.target.value });
  };

  Form.prototype.__handleLastNameChange__REACT_HOT_LOADER__ = function __handleLastNameChange__REACT_HOT_LOADER__(event) {
    this.setState({ lastName: event.target.value, id: Date.now().toString() });
  };

  Form.prototype.__handlePreferredNameChange__REACT_HOT_LOADER__ = function __handlePreferredNameChange__REACT_HOT_LOADER__(event) {
    this.setState({ preferredName: event.target.value });
  };

  Form.prototype.__handleGuardianFirstNameChange__REACT_HOT_LOADER__ = function __handleGuardianFirstNameChange__REACT_HOT_LOADER__(event) {
    this.setState({ guardianFirstName: event.target.value });
  };

  // handleFirstNameChange = event => {
  //   this.setState({dob: event.target.value})
  // };
  // TODO: select m/d/yr drop downs that are changed into 

  // handleFirstNameChange = event => {
  //   this.setState({gender: event.target.value})
  // };

  // handleFirstNameChange = event => {
  //   this.setState({grade: event.target.value})
  // };

  Form.prototype.__handleGuardianLastNameChange__REACT_HOT_LOADER__ = function __handleGuardianLastNameChange__REACT_HOT_LOADER__(event) {
    this.setState({ guardianLastName: event.target.value });
  };

  Form.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'mdc-layout-grid container' },
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__inner' },
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell' },
            React.createElement(TextField, {
              handleChange: this.handleFirstNameChange,
              value: this.state.firstName,
              label: 'First Name',
              rowRatio: 'half' }),
            React.createElement(TextField, {
              handleChange: this.handleMiddleNameChange,
              value: this.state.middleName,
              label: 'Middle Name',
              rowRatio: 'half' })
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell' },
            React.createElement(TextField, {
              handleChange: this.handleLastNameChange,
              value: this.state.lastName,
              label: 'Last Name',
              rowRatio: 'half' }),
            React.createElement(TextField, {
              handleChange: this.handlePreferredNameChange,
              value: this.state.preferredName,
              label: 'Preferred Name',
              rowRatio: 'half' })
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell' },
            React.createElement(TextField, {
              handleChange: this.handleGuardianFirstNameChange,
              value: this.state.guardianFirstName,
              label: 'Guardian\'s First Name',
              rowRatio: 'half' }),
            React.createElement(TextField, {
              handleChange: this.handleGuardianLastNameChange,
              value: this.state.guardianLastName,
              label: 'Guardian\'s Last Name',
              rowRatio: 'half' })
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell' },
            React.createElement(
              'button',
              { className: 'submit-button mdc-button mdc-button--raised', onClick: this.setSubmission },
              'Add Student'
            )
          )
        )
      )
    );
  };

  return Form;
}(Component);

Form.propTypes = {
  submitEntry: PropTypes.func
};

Form.defaultProps = {
  submitEntry: function submitEntry() {}
};

var _default = Form;
export default _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Form, 'Form', 'src/newStudent/StudentForm.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/newStudent/StudentForm.jsx');
}();

;