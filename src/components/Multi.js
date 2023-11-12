import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';
import Select from 'react-select';

const Multi = ({ label, name, options, isSearchable, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Select
        {...field}
        {...rest}
        value={options ? options.filter(option => field.value && field.value.includes(option.value)) : []}
        isSearchable={isSearchable || false}
        options={options}
        onChange={(selectedOptions) => {
          helpers.setValue(selectedOptions.map(option => option.value));
        }}
        isMulti
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default Multi;
