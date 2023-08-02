import React, { Component } from 'react';
import style from './LoginForm.module.scss';
import { SCHEMA } from '../../schemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
};

function LoginForm(props) {
    const handleSubmitToFormik = (values, actions) => {
        console.log(values);
        actions.resetForm()
    }

    return (
            <Formik initialValues={initialState} onSubmit={handleSubmitToFormik} validationSchema={SCHEMA}>
                {(formikProps) => {

                    return (
                        <Form>
                            <Field placeholder='firstName' name='firstName'/>
                            <ErrorMessage name='firstName' component="span" />
                            <Field placeholder='lastName' name='lastName'/>
                            <ErrorMessage name='lastName' component="span" />
                            <Field placeholder='email' name='email'/>
                            <ErrorMessage name='email' component="p" />
                            <Field type='password' placeholder='password' name='password'/>
                            <ErrorMessage name='password' component="p" />
                            <button type='submit'>Send</button>
                        </Form>
                    )
                }}
            </Formik>
    );
        
}

export default LoginForm;
