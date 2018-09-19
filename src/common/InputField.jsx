import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => (
    <div className={`${props.size} mdc-text-field mdc-text-field--outlined mdc-text-field--upgraded text-field-gutter`}>
        <input 
            type="text" 
            id={props.id} 
            className="mdc-text-field__input"
            placeholder={props.label}
            onChange={props.onChange}
            value={props.value}
            {...props} />
        <label 
            htmlFor="tf-outlined" 
            className="mdc-floating-label--float-above mdc-floating-label above-outline">
            {props.label}
        </label>
        <div className="mdc-notched-outline">
            <svg>
                <path className="mdc-notched-outline__path"/>
            </svg>
        </div>
        <div className="mdc-notched-outline__idle"/>
    </div>
);

InputField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  onChange: () => {},
};

export default InputField;