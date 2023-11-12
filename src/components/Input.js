import React from 'react'
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
const Input = (props) => {
    const {name,label} = props;
  return (
    <>
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...props}/>
        <ErrorMessage name={name} />
    </div>
    </>
  )
}

export default Input;