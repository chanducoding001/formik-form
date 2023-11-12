import { Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Container from './Container';
import './practice.css';
const FormRender = () => {
    const initialValues = {
        textInput:null
    }
    const onSubmit = (values)=>{
        console.log(values);
    }
    const validationSchema = Yup.object({
        textInput:Yup.string().matches(/^[0-9\b]+$/,'only numbers are allowed').required('Text Input is Required!')
    })
  return (
    <>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} className='practice-formik'>
        <Form className='practice-form'>
            <div>
            <Container control='text'  name='textInput' label='Text Input'/>
            <button type='submit'>Submit</button>
            </div>
        </Form>
    </Formik>
    </>
  )
}

export default FormRender;