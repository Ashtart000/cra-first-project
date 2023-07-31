import React, { Component } from 'react';
import style from './LoginForm.module.scss';
import { SCHEMA } from '../../schemas';
import { Formik, Form, Field } from 'formik';

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
            <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
                {(formikProps) => {

                    return (
                        <Form>
                            <Field placeholder='firstName' name='firstName'/>
                            <Field placeholder='lastName' name='lastName'/>
                            <Field placeholder='email' name='email'/>
                            <Field type='password' placeholder='password' name='password'/>
                            <button type='submit'>Send</button>
                        </Form>
                    )
                }}
            </Formik>
    );
        
}

export default LoginForm;
