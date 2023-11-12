import React from 'react';
import { useFormikContext, useField } from 'formik';
import { Form, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';

const FileUploadComponent = ({ label, name, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleChange = (event) => {
    const files = event.currentTarget.files;
    setFieldValue(name, files);
  };
  return (
    <Form.Group as={Col} controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="file"
        multiple
        onChange={handleChange}
        isInvalid={field.value && field.value.length === 0}
        {...props}
      />
      <Form.Control.Feedback type="invalid">
        Please select at least one file.
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FileUploadComponent;