import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const TextArea = (props) => {
    const {label,name,...rest} = props;
  return (
    <div className='form-control'>
    <label htmlFor={name} className='field-label'>{label}</label>
    <Field name={name} id={name} as='textarea' {...rest} className='field-input padding-input'/>
    <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default TextArea;