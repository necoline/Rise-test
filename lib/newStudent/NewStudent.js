function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import StudentForm from './StudentForm';

var NewStudent = function (_Component) {
  _inherits(NewStudent, _Component);

  function NewStudent() {
    var _temp, _this, _ret;

    _classCallCheck(this, NewStudent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      redirect: false
    }, _this.setRedirect = function () {
      var _this2;

      return (_this2 = _this).__setRedirect__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.submitEntry = function () {
      var _this3;

      return (_this3 = _this).__submitEntry__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.renderRedirect = function () {
      var _this4;

      return (_this4 = _this).__renderRedirect__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  NewStudent.prototype.__setRedirect__REACT_HOT_LOADER__ = function __setRedirect__REACT_HOT_LOADER__() {
    this.setState({
      redirect: true
    });
  };

  NewStudent.prototype.__submitEntry__REACT_HOT_LOADER__ = function __submitEntry__REACT_HOT_LOADER__(student) {
    this.props.addStudent(student);
    this.setRedirect();
  };

  NewStudent.prototype.__renderRedirect__REACT_HOT_LOADER__ = function __renderRedirect__REACT_HOT_LOADER__() {
    return this.state.redirect ? React.createElement(Redirect, { to: '/roster' }) : null;
  };

  NewStudent.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      this.renderRedirect(),
      React.createElement(Header, { title: "New Student" }),
      React.createElement(StudentForm, { submitEntry: this.submitEntry })
    );
  };

  return NewStudent;
}(Component);

NewStudent.propTypes = {
  addStudent: PropTypes.func
};

NewStudent.defaultProps = {
  addStudent: function addStudent() {}
};

var _default = NewStudent;
export default _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NewStudent, 'NewStudent', 'src/newStudent/NewStudent.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/newStudent/NewStudent.jsx');
}();

;