import React from 'react';
import { useField, ErrorMessage } from 'formik';

const One = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (event) => {
    const files = event.currentTarget.files;
    helpers.setValue(files);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="file"
        onChange={handleChange}
        multiple
        accept=".jpg, .jpeg, .png, .gif, .pdf" // Add valid file extensions here
      />
      <ErrorMessage name={field.name} component="div" className="error" />
      {meta.touched && meta.error && typeof meta.error === 'string' ? (
  <div className="error">{meta.error}</div>
) : null}

      {/* <ErrorMessage name={field.name} component="div" className="error" /> */}
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </div>
  );
};

export default One;
