import { Field } from 'formik';
import React from 'react'

const Dummy = (props) => {
    const {label,name,...rest} = props
  return (
    <>
    <label>{label}</label>
    <Field placeholder='dummy' name={name} {...rest}/>
    </>
  )
}

export default Dummy;