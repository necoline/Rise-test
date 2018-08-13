import React from 'react';
import PropTypes from 'prop-types';

var TextField = function TextField(props) {
    return React.createElement(
        'div',
        { className: 'mdc-text-field mdc-text-field--outlined mdc-text-field--upgraded text-field-gutter text-field-' + props.rowRatio + '-width' },
        React.createElement('input', {
            type: 'text',
            id: 'tf-outlined',
            className: 'mdc-text-field__input',
            placeholder: props.label,
            onChange: props.handleChange,
            value: props.value }),
        React.createElement(
            'label',
            {
                htmlFor: 'tf-outlined',
                className: 'mdc-floating-label--float-above mdc-floating-label above-outline' },
            props.label
        ),
        React.createElement(
            'div',
            { className: 'mdc-notched-outline' },
            React.createElement(
                'svg',
                null,
                React.createElement('path', { className: 'mdc-notched-outline__path' })
            )
        ),
        React.createElement('div', { className: 'mdc-notched-outline__idle' })
    );
};

TextField.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rowRatio: PropTypes.string.isRequired
};

TextField.defaultProps = {
    handleChange: function handleChange() {}
};

var _default = TextField;
export default _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TextField, 'TextField', 'src/common/TextField.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/common/TextField.jsx');
}();

;