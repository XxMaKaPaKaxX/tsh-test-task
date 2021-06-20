import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = ({ id, isChecked = false, handleOnChange = Function.prototype, labelName }) => {

    return (
        <div className="form-check form-check--custom">
            <input
                className="form-check-input form-check--custom__input"
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
                id={id}
            />
            <label className="form-check-label" htmlFor={id}>
                {labelName}
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    id: PropTypes.string,
    isChecked: PropTypes.bool,
    handleOnChange: PropTypes.func,
    labelName: PropTypes.string

}

export default Checkbox;
