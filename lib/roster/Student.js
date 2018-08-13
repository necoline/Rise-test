function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import Header from '../common/Header';

var Student = function (_Component) {
  _inherits(Student, _Component);

  function Student() {
    var _temp, _this, _ret;

    _classCallCheck(this, Student);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.nothing = function () {
      var _this2;

      return (_this2 = _this).__nothing__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Student.prototype.__nothing__REACT_HOT_LOADER__ = function __nothing__REACT_HOT_LOADER__() {};

  Student.prototype.render = function render() {
    var _props$student = this.props.student,
        firstName = _props$student.firstName,
        middleName = _props$student.middleName,
        lastName = _props$student.lastName,
        preferredName = _props$student.preferredName,
        guardianFirstName = _props$student.guardianFirstName,
        guardianLastName = _props$student.guardianLastName;

    return React.createElement(
      'div',
      null,
      React.createElement(Header, { title: "Student Profile" }),
      React.createElement(
        'div',
        { className: 'mdc-layout-grid container' },
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__inner' },
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell fab-right' },
            React.createElement(
              'button',
              { className: 'mdc-fab fab-toolbar', 'aria-label': 'add' },
              React.createElement(
                'span',
                { className: 'mdc-fab__icon material-icons' },
                'edit'
              )
            ),
            React.createElement(
              'button',
              { className: 'mdc-fab fab-toolbar', 'aria-label': 'add', onClick: this.props.removeStudent },
              React.createElement(
                'span',
                { className: 'mdc-fab__icon material-icons' },
                'delete'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell' },
            React.createElement(TextField, {
              value: firstName,
              label: 'First Name',
              rowRatio: 'half' }),
            React.createElement(TextField, {
              value: middleName,
              label: 'Middle Name',
              rowRatio: 'half' })
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell' },
            React.createElement(TextField, {
              value: lastName,
              label: 'Last Name',
              rowRatio: 'half' }),
            React.createElement(TextField, {
              value: preferredName,
              label: 'Preferred Name',
              rowRatio: 'half' })
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell' },
            React.createElement(TextField, {
              value: guardianFirstName,
              label: 'Guardian\'s First Name',
              rowRatio: 'half' }),
            React.createElement(TextField, {
              value: guardianLastName,
              label: 'Guardian\'s Last Name',
              rowRatio: 'half' })
          )
        )
      )
    );
  };

  return Student;
}(Component);

Student.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    preferredName: PropTypes.string,
    guardianFirstName: PropTypes.string.isRequired,
    guardianLastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  removeStudent: PropTypes.func
};

Student.defaultProps = {
  removeStudent: function removeStudent() {}
};

var _default = Student;
export default _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Student, 'Student', 'src/roster/Student.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/roster/Student.jsx');
}();

;