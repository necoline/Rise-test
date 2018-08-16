import React from 'react';
import PropTypes from 'prop-types';

const DropDownField = (props) => (
<div className={`mdc-select mdc-select--outlined input-field-gutter input-field-${props.rowRatio}-width`}>
    <select className="mdc-select__native-control">
      <option value={props.selected || ''} enabled defaultValue/>
      {props.options.map( option =>
              <option value={option} key={option}>
              {option}
              </option>
      )}
    </select>
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

DropDownField.propTypes = {
    selected: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.string.isRequired,
    rowRatio: PropTypes.string.isRequired,
};

DropDownField.defaultProps = {
  selected: '',
};

export default DropDownField;