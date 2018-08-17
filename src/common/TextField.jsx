import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => (
    <div className={`mdc-text-field mdc-text-field--disabled mdc-text-field--outlined mdc-text-field--upgraded input-field-gutter input-field-${props.rowRatio}-width`}>
        <input 
            type="text" 
            id="disabled-text-field"
            disabled 
            className="mdc-text-field__input"
            value={props.value || ''} />
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

TextField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    rowRatio: PropTypes.string.isRequired,
};

TextField.defaultProps = {
    value: '',
  };

export default TextField;