import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const Select = (props) => {
    const {label,name,options,...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field name={name} id={name} as='select' {...rest}>
        {   options ?
            options.map((option)=>{
                return <option key={option.value} value={option.value}>{option.key}</option>
            })
            :[]
        }
        </Field>
        <ErrorMessage name={name} />
    </div>
  )
}

export default Select