import React from 'react'
import FileUploadComponent from './FileUploadComponent';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
const ChatgptForm = () => {
    const initialValues={
        files: [],
      }
    const validationSchema = Yup.object().shape({
        files: Yup.array().min(1, 'Please select at least one file.'),
      });
      const onSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
      }
      console.log('chatgprform');
  return (
    <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={onSubmit}
>
  {/* {(formik) => ( */}
    <Form >
      <FileUploadComponent label="Files" name="files" />
      <Button type="submit">Submit</Button>
    </Form>
  {/* )} */}
</Formik>
  )
}

export default ChatgptForm;