import React from 'react';
import { Formik } from 'formik';
import SignUpForm from './SignUpForm';
import * as yup from 'yup';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({ //is this okay?
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
        //confirmation field? needs to be the same as password
});

const SignUp = () => {
    let history = useHistory();
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => { //confirmation field?
        const { username, password } = values; //is this right, do you need the confrimation pass?
    
        try {
            const { data } = await signUp({ username, password }); //confirmation field?
            console.log("signUp data:", data);
            const { signInData } = await signIn({ username, password }); //this right?
            console.log("signUp signInData:", signInData);
            //log in the user
            history.push("/"); //is this okay?
        } catch (e) {
            console.log(e);
        }
    };
    const initialValues = { //confirmation field?
        username: '',
        password: '',
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUp;