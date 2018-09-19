import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => (
<div className={`mdc-text-field mdc-text-field--outlined mdc-text-field--upgraded text-field-gutter`}>
        <input 
            type="text" 
            id={props.id} 
            className="mdc-text-field__input"
            disabled
            placeholder={props.label}
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

TextField.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};


export default TextField;