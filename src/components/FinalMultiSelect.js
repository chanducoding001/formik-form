import { ErrorMessage, Field } from 'formik';
import React from 'react';
import Select from 'react-select';

const FinalMultiSelect = (props) => {
  const { label, name, options, isSearchable, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <Select
              {...field}
              {...rest}
              value={options ? options.filter((option) => value.includes(option.value)) : []}
              isSearchable={isSearchable !== undefined ? isSearchable : true}
              options={options}
              onChange={(selectedOptions) => {
                setFieldValue(name, selectedOptions.map((option) => option.value));
              }}
              isMulti
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FinalMultiSelect;



