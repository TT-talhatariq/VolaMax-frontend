import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9]{10,15}$/, 'Enter a valid phone number'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms & conditions')
    .required(),
});

export type SignUpData = yup.InferType<typeof signUpSchema>;
