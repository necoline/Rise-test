function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { API } from 'aws-amplify';
import Landing from './Landing';
import Roster from './roster/Roster';
import NewStudent from './newStudent/NewStudent';
// import Student from './roster/Student';

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      students: [],
      student: {},
      redirect: false
    }, _this.addStudent = function () {
      var _this2;

      return (_this2 = _this).__addStudent__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.removeStudent = function () {
      var _this3;

      return (_this3 = _this).__removeStudent__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.viewStudent = function () {
      var _this4;

      return (_this4 = _this).__viewStudent__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.renderRedirect = function () {
      var _this5;

      return (_this5 = _this).__renderRedirect__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  App.prototype.componentDidMount = function componentDidMount() {
    var _this6 = this;

    API.get('studentsCRUD', '/students').then(function (students) {
      _this6.setState({ students: students });
    });
  };

  App.prototype.__addStudent__REACT_HOT_LOADER__ = function __addStudent__REACT_HOT_LOADER__(student) {
    var _this7 = this;

    API.post('studentsCRUD', '/students', { body: student }).then(function () {
      _this7.setState({ students: [student].concat(_this7.state.students) });
    });
  };

  App.prototype.__removeStudent__REACT_HOT_LOADER__ = function __removeStudent__REACT_HOT_LOADER__(studentId) {
    var _this8 = this;

    API.del('studentsCRUD', '/students/object/' + studentId).then(function () {
      _this8.setState({
        students: _this8.state.students.filter(function (student) {
          return student.id !== studentId;
        })
      });
    });
  };

  App.prototype.__viewStudent__REACT_HOT_LOADER__ = function __viewStudent__REACT_HOT_LOADER__(student) {
    this.setState({ student: student, redirect: true });
  };

  App.prototype.__renderRedirect__REACT_HOT_LOADER__ = function __renderRedirect__REACT_HOT_LOADER__() {
    return this.state.redirect ? React.createElement(Redirect, { to: '/roster/:id', student: this.state.student, removeStudent: this.removeStudent }) : null;
  };

  App.prototype.render = function render() {
    var _this9 = this;

    return React.createElement(
      'div',
      { className: 'app' },
      this.renderRedirect(),
      React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: '/', component: Landing }),
        React.createElement(Route, {
          path: '/roster',
          component: function component() {
            return React.createElement(Roster, { students: _this9.state.students, viewStudent: _this9.viewStudent });
          } }),
        React.createElement(Route, {
          path: '/new-student',
          component: function component() {
            return React.createElement(NewStudent, { addStudent: _this9.addStudent });
          } })
      )
    );
  };

  return App;
}(Component);

var _default = App;


export default _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', 'src/App.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/App.jsx');
}();

;