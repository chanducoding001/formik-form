// import {Field, ErrorMessage } from 'formik';
// import React from 'react'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// const DatePicker = (props) => {
//     const {label,name,...rest} = props;
//   return (
//     <>
//     <label htmlFor={name}>{label}</label>
//     <Field name={name} {...rest}>
//         {
//             ({form,field})=>{
//                 const {value} = field;
//                 const {setFieldValue} = form;
//                 return <DatePicker 
//                 {...field} {...rest} id={name} 
//                 selected={value}
//                 onChange={(val)=>setFieldValue(name,val)} 
//                 />
//             }
//         }
//     </Field>
//     <ErrorMessage name={name} />
//     </>
//   )
// }

// export default DatePicker;