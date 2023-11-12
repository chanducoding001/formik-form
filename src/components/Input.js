import React from 'react'
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
const Input = (props) => {
    const {name,label} = props;
  return (
    <>
    <div className='form-control'>
        <label htmlFor={name} className='field-label'>{label}</label>
        <Field id={name} name={name} {...props} className='field-input padding-input'/>
        <ErrorMessage name={name} component={TextError}/>
    </div>
    </>
  )
}

export default Input;