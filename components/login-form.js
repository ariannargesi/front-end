import { useState } from 'react';
import Router from 'next/router';
import { Magic } from 'magic-sdk';
import { useForm } from 'react-hook-form';

const LoginForm = () => {

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = handleSubmit(async (formData) => {

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
      const didToken = await magic.auth.loginWithMagicLink({
        email: formData.email,
      });
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        Router.push('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="hello@example.com"
          ref={register({ required: 'Email is required' })}
        />
        <button type="submit">Continue</button>
    </form>
  );
};

export default LoginForm;
