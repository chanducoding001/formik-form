import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const Select = (props) => {
    const {label,name,options,...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name} className='field-label'>{label}</label>
        <Field name={name} id={name} as='select' {...rest} className='field-input'>
        {   options ?
            options.map((option)=>{
                return <option key={option.value} value={option.value} className='select-option'>{option.key}</option>
            })
            :[]
        }
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select