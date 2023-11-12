import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import FileUpload from './FileUpload';
import One from './One';
const FilesForm = () => {
  const validationSchema = Yup.object({
    files: Yup.array()
      .min(1, 'Please upload at least one file')
      .required('File is required'),
  });

  const initialValues = {
    files: [],
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {/* <Field name="files" label="Upload Files" component={One} /> */}
        <One name='files' loabel='upload files' isMulti={true}/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FilesForm;
