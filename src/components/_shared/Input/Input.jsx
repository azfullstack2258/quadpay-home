import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from './TextField';

const Input = ({ name, defaultValue, ...rest }) => {
  const { errors, control } = useFormContext();
  const { label, required, helperText } = rest;

  if (typeof defaultValue === 'undefined') {
    defaultValue = '';
  }

  const hasErrors = errors && errors[name] && errors[name].message;

  return (
    <div>
      {label && (
        <div className="field-label">
          {label} {required && <span className="text-red">*</span>}
        </div>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        as={<TextField hasErrors {...rest} />}
      />
      {hasErrors ? (
        <div className="field-helper field-error">{hasErrors}</div>
      ) : (
        <div className="field-helper">{helperText}</div>
      )}
    </div>
  );
};

export default Input;
