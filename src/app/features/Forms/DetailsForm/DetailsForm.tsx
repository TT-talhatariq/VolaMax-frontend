'use client';

import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import AuthenticatingModal from '@/app/components/AuthenticatingModal';
import FormInput from '@/app/components/Common/FlagFormInput';
import InputField from '@/app/components/Common/InputField';
import PrimaryButton from '@/app/components/Common/PrimaryButton';
import RightSection from '@/app/components/Common/RightSection';
import StepIndicator from '@/app/components/StepIndicator';

import { companyDetailsSchema } from './Schema';

interface CompanyDetailsFormData {
  country: string;
  companyName: string;
  businessType: string;
  category: string;
  role: string;
}

const DetailsForm = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<CompanyDetailsFormData>({
    resolver: yupResolver(companyDetailsSchema),
  });

  const onSubmit = async (data: CompanyDetailsFormData) => {
    try {
      console.log('Company Details data:', data);
      setShowModal(true);

      // TODO: Implement actual company details API call
      // await companyDetailsAPI(data);

      setTimeout(() => {
        setShowModal(false);
        // Redirect to dashboard or next step
        // router.push('/dashboard');
      }, 2500);
    } catch (error) {
      console.error('Company details error:', error);
      setShowModal(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="relative mx-auto mt-10 flex max-w-5xl flex-col overflow-hidden md:h-[800px] md:flex-row">
        <div className="flex h-full w-full flex-col justify-between rounded-b-2xl bg-white p-6 sm:p-10 md:relative md:z-10 md:-mr-2 md:w-[51%] md:translate-x-[4px] md:rounded-tl-none md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none md:px-14 md:shadow-md lg:px-20">
          <div className="mb-6 flex items-center">
            <img
              src="/form-title.png"
              alt="Volamex Logo"
              className="w-auto max-w-[140px] object-contain"
            />
          </div>

          <h2 className="mb-2 text-xl font-semibold text-[#000] sm:text-2xl">
            Congratulations your account has created 🎊
          </h2>
          <p className="mb-6 text-sm font-[400] text-[#8181A5]">
            Enter your Company details to proceed further
          </p>

          <div className="mb-8">
            <StepIndicator currentStep={2} totalSteps={2} />
          </div>

          <div>
            <FormInput
              label="Please select your Country"
              type="text"
              showFlag
              {...register('country')}
            />
            {errors.country && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <InputField label="Company name" {...register('companyName')} />
            {errors.companyName && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div>
            <InputField
              label="Describe your Business"
              isDropdown
              options={[
                'Import & Export',
                'Manufacturing',
                'Retail',
                'Logistics',
                'Other',
              ]}
              {...register('businessType')}
            />
            {errors.businessType && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.businessType.message}
              </p>
            )}
          </div>

          <div>
            <InputField
              label="Category"
              isDropdown
              options={[
                'Automotive',
                'Agriculture',
                'Technology',
                'Textile',
                'Other',
              ]}
              {...register('category')}
            />
            {errors.category && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <InputField
              label="Choose your Role for the Account"
              isDropdown
              options={['Importer', 'Exporter', 'Agent', 'Manager']}
              {...register('role')}
            />
            {errors.role && (
              <p className="-mt-2 mb-2 text-sm text-red-500">
                {errors.role.message}
              </p>
            )}
          </div>

          <div className="mx-auto flex w-[50%] items-center justify-center space-x-3 md:mx-0 md:mr-2 md:w-[50%] md:justify-start">
            <PrimaryButton
              text={isSubmitting ? 'Processing...' : 'Continue'}
              className="px-4 py-2"
              type="submit"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="h-full w-full md:w-1/2">
          <RightSection
            imageSrc="/signup.svg"
            text="Volamex connects you with multiple Importers/Exporters
               from across borders in a secure way"
          />
        </div>

        <AuthenticatingModal isOpen={showModal} />
      </div>
    </form>
  );
};

export default DetailsForm;
