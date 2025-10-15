import * as yup from 'yup';

export const companyDetailsSchema = yup.object().shape({
  country: yup.string().required('Country is required'),
  companyName: yup
    .string()
    .required('Company name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are allowed'),
  businessType: yup.string().required('Please describe your business'),
  category: yup.string().required('Category is required'),
  role: yup.string().required('Please select your role'),
});
