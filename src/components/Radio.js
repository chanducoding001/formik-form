import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Radio = (props) => {
    const { label,options, name, ...rest } = props;
    // console.log(props.options);
  //   const checkBoxOptions = [
  //     {key:'option 1',value:'coption1'},
  //     {key:'option 2',value:'coption2'},
  //     {key:'option 3',value:'coption3'},
  // ]
    return (
      <div className='form-control'>
        <label htmlFor={name} className='field-label'>{label}</label>
        <div className='options-container-wrapper'>
        {options &&
          options.map((option)=>{
            return(
              <React.Fragment key={option.key}>
                <div className='options-wrapper'>
                <Field type='radio' name={name} value={option.value} {...rest}/>
                <label>{option.key}</label>
                </div>
              </React.Fragment>
            )
          })
        }
        </div>
        <ErrorMessage name={name} component={TextError}/>
      </div>
    );
}

export default Radio;