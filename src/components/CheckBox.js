import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const CheckBox = (props) => {
    const { label, name, options, ...rest } = props;
    // console.log(props);
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name} {...rest} >
          {
            ({ field }) => {
              return options.map((option,index) => {
                return (
                  <React.Fragment key={index}>
                    <input
                      type='checkbox'
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </React.Fragment>
                );
              })
            }
          }
          
        </Field>
        <ErrorMessage name={name} />
      </div>
    );
}

export default CheckBox;