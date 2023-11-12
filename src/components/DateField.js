import {Field, ErrorMessage } from 'formik';
import React from 'react'
import DatePicker from "react-datepicker";
//import DateView from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TextError from './TextError';
const DateField = (props) => {
    const {label,name,...rest} = props;
    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }
  return (
    <>
    <div className='form-control'>
    <label htmlFor={name} className='field-label'>{label}</label>
    <Field name={name} >
        {
            ({form,field})=>{
                const {value} = field;
                const {setFieldValue} = form;
                return <DatePicker className='field-input padding-input'
                {...field} {...rest} id={name} 
                selected={value}
                onChange={(val)=>{
                setFieldValue(name,val)
            }} 
                />
            }
        }
    </Field>
    <ErrorMessage name={name} component={TextError} />
    </div>
    </>
  )
}

export default DateField;