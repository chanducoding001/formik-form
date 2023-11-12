import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const CheckBox = (props) => {
    const { label, name, options, ...rest } = props;
    // console.log(props);
    return (
      <div className='form-control'>
        <label htmlFor={name} className='field-label'>{label}</label>
        <Field name={name} {...rest} >
          
          {
            ({ field }) => {
              return <div className='options-container-wrapper'>
              {
              options.map((option,index) => {
                return (
                  <React.Fragment key={index}>
                    <div className='options-wrapper'>
                    <input
                      type='checkbox'
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                    </div>
                  </React.Fragment>
                );
              })
            }
              </div>
            }
          }
          
          
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    );
}

export default CheckBox;