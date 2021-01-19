import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username must have a length of at least 4')
    .max(14, 'Username must not be longer than 14 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must have a length of at least 6')
    .max(16, 'Password must not be longer than 16 characters')
    .required('Password is required'),
});

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    const initialValues = {
        username: '',
        password: '',
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;