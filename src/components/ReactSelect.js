import { ErrorMessage, Field } from 'formik';
import React from 'react'
import Select from 'react-select';
const ReactSelect = (props) => {
    const { label, name, options,isSearchable, ...rest } = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue,values } = form;
                        const { value } = field;
                        return (
                            <Select {...field} {...rest} 
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
            <ErrorMessage name={name}/>
        </div>
    )
}

export default ReactSelect;