import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

const Form = ({ children, schema, onSubmit, onChange }) => {
  const methods = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const state = methods.watch();

  useEffect(() => {
    if (typeof onChange !== 'undefined') {
      onChange(state);
    }
  }, [state, onChange]);

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
