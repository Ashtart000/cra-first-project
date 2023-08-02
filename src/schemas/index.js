import * as yup from 'yup';

export const SCHEMA = yup.object({
    firstName: yup.string('First name is a string!!!').required('Required!!!').min(2).max(30),
    lastName: yup.string('Last name as a string!!!').required('Required!!!').min(2).max(30),
    email: yup.string('Email as a string!!!').required('Email is required field!!!').email('Type valid email!!!'),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Password is not valid!!!')
})