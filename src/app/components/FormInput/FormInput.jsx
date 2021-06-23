import React from 'react';
import './FormInput.scss';

const FormInput = ({ labelValue, name, onChangeFuncton = Function.prototype, type = 'text', value }) => {
    return (
        <div className='d-flex flex-column mb-2'>
            <label htmlFor={name}>
                {labelValue}
            </label>
            <input type={type} className='p-3 my-2 login-form__input' id={name} name={name} placeholder={`Enter ${name}`} value={value} onChange={onChangeFuncton} />
        </div>
    );
}

export default FormInput;