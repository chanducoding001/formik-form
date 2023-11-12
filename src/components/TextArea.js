import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const TextArea = (props) => {
    const {label,name,...rest} = props;
  return (
    <div className='form-control'>
    <label htmlFor={name}>{label}</label>
    <Field name={name} id={name} as='textarea' {...rest}/>
    <ErrorMessage name={name} />
    </div>
  )
}

export default TextArea;