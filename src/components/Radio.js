import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Radio = (props) => {
    const { label,options, name, ...rest } = props;
    // console.log(props.options);
  //   const checkBoxOptions = [
  //     {key:'option 1',value:'coption1'},
  //     {key:'option 2',value:'coption2'},
  //     {key:'option 3',value:'coption3'},
  // ]
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        {options &&
          options.map((option)=>{
            return(
              <React.Fragment key={option.key}>
                <Field type='radio' name={name} value={option.value} {...rest}/>
                <label>{option.key}</label>
              </React.Fragment>
            )
          })
        }
        <ErrorMessage name={name}/>
      </div>
    );
}

export default Radio;