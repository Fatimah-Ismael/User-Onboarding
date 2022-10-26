import * as yup from 'yup';


const schema = yup.object().shape({
    username : yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username muust be 3 characters or more!'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('email is required'),
    password: yup
        .string()
        .required('Password  is required!')
        .min(6, 'password must be at least 6 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the terms and conditions')



})
export default schema;