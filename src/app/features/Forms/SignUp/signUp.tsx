'use client';

import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { Eye, Mail, Phone, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

import FormInput from '@/app/components/Common/FlagFormInput';
import InputField from '@/app/components/Common/InputField';
import PrimaryButton from '@/app/components/Common/PrimaryButton';
import { SecondaryButton } from '@/app/components/Common/PrimaryButton/PrimaryButton';
import RightSection from '@/app/components/Common/RightSection';
import StepIndicator from '@/app/components/StepIndicator';

import { SignUpData, signUpSchema } from './Schema';

const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignInClick = () => {
    router.push('/login');
  };

  const onSubmit = async (data: SignUpData) => {
    try {
      console.log('Sign Up data:', data);
      // TODO: Implement actual sign up API call
      // await signUpAPI(data);
      // router.push('/dashboard'); // Redirect after successful sign up
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="relative mx-auto mt-10 flex max-w-5xl flex-col overflow-hidden md:h-[800px] md:flex-row">
        {/* Left White Section */}
        <div className="flex h-full w-full flex-col justify-between rounded-b-2xl bg-white p-6 sm:p-10 md:relative md:z-10 md:-mr-2 md:w-[51%] md:translate-x-[4px] md:rounded-tl-none md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none md:px-14 md:shadow-md lg:px-20">
          <div className="mb-6 flex items-center">
            <img
              src="/form-title.png"
              alt="Volamex Logo"
              className="w-auto max-w-[140px] object-contain"
            />
          </div>

          <h2 className="mb-2 text-xl font-semibold text-[#000] sm:text-2xl">
            Welcome to Volamex <br />
            <span className="font-bold">Sign Up to get Started</span>
          </h2>
          <p className="mb-6 text-sm font-[400] text-[#8181A5]">
            Enter your details to proceed further
          </p>

          <div className="mb-8">
            <StepIndicator currentStep={1} totalSteps={2} />
          </div>

          <div>
            <InputField
              label="Full name"
              icon={User}
              {...register('fullName')}
            />
            {errors.fullName && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <FormInput
              label="Phone"
              type="tel"
              showFlag
              Icon={Phone}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <InputField
              label="Email"
              type="email"
              icon={Mail}
              {...register('email')}
            />
            {errors.email && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <InputField
              label="Password"
              type="password"
              icon={Eye}
              {...register('password')}
            />
            {errors.password && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Checkbox */}
          <div className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              {...register('terms')}
              className="relative h-5 w-5 cursor-pointer appearance-none rounded border border-[#8181A5] bg-white transition-all duration-200 before:absolute before:top-[3px] before:left-[7.5px] before:h-[10px] before:w-[5px] before:rotate-45 before:border-r-[2px] before:border-b-[2px] before:border-[#163B82] before:opacity-0 before:content-[''] checked:before:opacity-100"
            />
            <label
              htmlFor="terms"
              className="cursor-pointer text-sm font-medium text-black select-none"
            >
              I agree with terms & Conditions
            </label>
          </div>
          {errors.terms && (
            <p className="-mt-2 mb-2 text-sm text-red-500">
              {errors.terms.message}
            </p>
          )}

          {/* Buttons */}
          <div className="flex items-center space-x-3 md:mr-2">
            <PrimaryButton
              text={isSubmitting ? 'Signing Up...' : 'Sign Up'}
              className="w-auto px-4 py-2"
              type="submit"
              disabled={isSubmitting}
            />
            <SecondaryButton
              text="Sign In"
              className="w-auto px-4 py-2"
              onClick={handleSignInClick}
            />
          </div>

          {/* Google Sign In */}
          <div className="flex justify-center md:justify-start">
            <button
              className="mt-3 flex w-[70%] items-center justify-center gap-2 rounded-sm border py-2 text-[15px] font-[400] shadow-[12px] transition-all sm:w-[60%] md:w-[47%]"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#ECECF2',
                color: '#8181A5',
              }}
            >
              <img src="/google.svg" alt="Google Logo" className="h-5 w-5" />
              Or sign in with
            </button>
          </div>
        </div>

        {/* Right Blue Section */}
        <div className="h-full w-full md:-ml-[4px] md:w-1/2">
          <RightSection
            imageSrc="/signup.svg"
            text="Volamex connects you with multiple Importers/Exporters
      from across borders in a secure way"
          />
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
