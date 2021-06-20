import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text = 'button', disabled = false, outline = false, handleOnClick = Function.prototype }) => {

    if (disabled) {
        return (
            <button
                className={!outline ? 'disabled-btn' : 'disabled-btn disabled-btn--outline'}
                disabled
            >
                {text}
            </button>
        )
    }
    return (
        <button
            className={!outline ? 'custom-btn' : 'custom-btn custom-btn--outline'}
            onClick={handleOnClick}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    handleOnClick: PropTypes.func

}

export default Button;