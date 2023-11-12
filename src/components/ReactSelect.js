import { ErrorMessage, Field } from 'formik';
import React from 'react'
import Select from 'react-select';
import TextError from './TextError';
const ReactSelect = (props) => {
    const { label, name, options,isSearchable, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name} className='field-label'>{label}</label>
            <Field name={name} >
                {
                    ({ form, field }) => {
                        const { setFieldValue,values } = form;
                        const { value } = field;
                        return (
                            <Select {...field} {...rest} className='select-library'
                            value={options ? options.find(option => option.value === value) : ''}
                            isSearchable={isSearchable?isSearchable:false}
                            options={options}
                            onChange={(selected)=>{
                                setFieldValue(name,selected.value)
                            }}/>
                            // <Select
                            //     options={options}
                            //     name={field.name}
                            //     value={options ? options.find(option => option.value === field.value) : ''}
                            //     onChange={(option) => form.setFieldValue(field.name, option.value)}
                            //     onBlur={field.onBlur}
                            // />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default ReactSelect;