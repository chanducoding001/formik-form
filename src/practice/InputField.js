import { ErrorMessage, Field } from 'formik';
import React from 'react'

const InputField = (props) => {
    const {label,name,...rest} = props;
  return (
    <div className='form-control'>
    <label htmlFor={name}>{label}</label>
    <Field name={name} id={name} {...rest}/>
    <ErrorMessage name={name}/>
    </div>
  )
}

export default InputField;