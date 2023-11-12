import {Field, ErrorMessage } from 'formik';
import React from 'react'
import DatePicker from "react-datepicker";
//import DateView from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
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
    <label htmlFor={name}>{label}</label>
    <Field name={name} >
        {
            ({form,field})=>{
                const {value} = field;
                const {setFieldValue} = form;
                return <DatePicker
                {...field} {...rest} id={name} 
                selected={value}
                onChange={(val)=>{
                // var event = new Date(val);
                // let date = JSON.stringify(event)
                // date = date.slice(1,11)
                setFieldValue(name,val)
            }} 
                />
            }
        }
    </Field>
    {/* <Field id={name} name={name} placeholder="Date of Birth"{...rest}/> */}
    <ErrorMessage name={name} />
    </>
  )
}

export default DateField;