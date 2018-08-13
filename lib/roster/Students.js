function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Students = function (_Component) {
    _inherits(Students, _Component);

    function Students() {
        var _temp, _this, _ret;

        _classCallCheck(this, Students);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.setRedirect = function () {
            var _this2;

            return (_this2 = _this).__setRedirect__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Students.prototype.__setRedirect__REACT_HOT_LOADER__ = function __setRedirect__REACT_HOT_LOADER__(student) {
        return this.props.viewStudent(student);
    };

    Students.prototype.render = function render() {
        var _this3 = this;

        return React.createElement(
            'ul',
            { className: 'mdc-list' },
            this.props.students.map(function (student) {
                return React.createElement(
                    'div',
                    { key: student.id },
                    React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this3.setRedirect(student);
                            }, role: 'button', tabIndex: '0' },
                        React.createElement(
                            'li',
                            { className: 'mdc-layout-grid__inner mdc-list-item' },
                            student.lastName,
                            ', ',
                            student.firstName,
                            React.createElement(
                                'div',
                                { className: 'mdc-list-item__meta' },
                                React.createElement(
                                    'i',
                                    { className: 'material-icons' },
                                    'lens'
                                )
                            )
                        )
                    ),
                    React.createElement('li', { role: 'separator', className: 'mdc-list-divider' })
                );
            })
        );
    };

    return Students;
}(Component);

;

Students.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })).isRequired,
    viewStudent: PropTypes.func
};

Students.defaultProps = {
    viewStudent: function viewStudent() {}
};

var _default = Students;
export default _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Students, 'Students', 'src/roster/Students.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/roster/Students.jsx');
}();

;