import React from 'react';

import DetailsForm from '../Forms/DetailsForm';
import ForgetPassword from '../Forms/ForgetPassword';
import ResetPassword from '../Forms/ResetPassword';
import SignInForm from '../Forms/SignIn';
import SignUpForm from '../Forms/SignUp';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <SignInForm />
    </div>
  );
};

export default HomePage;
