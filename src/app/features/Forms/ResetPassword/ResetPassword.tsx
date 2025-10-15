'use client';

import { Eye, Key, Mail } from 'lucide-react';

import InputField from '@/app/components/Common/InputField';
import PrimaryButton from '@/app/components/Common/PrimaryButton';
import RightSection from '@/app/components/Common/RightSection';

const ResetPassword = () => {
  return (
    <div className="relative mx-auto mt-10 flex max-w-5xl flex-col overflow-hidden md:h-[600px] md:flex-row">
      {/* Left White Section */}
      <div className="flex h-full w-full flex-col justify-start rounded-b-2xl bg-white p-6 sm:p-8 md:relative md:z-10 md:-mr-2 md:w-[51%] md:translate-x-[4px] md:rounded-tl-none md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none md:px-12 md:shadow-md lg:px-16">
        {/* Logo */}
        <div className="mb-4 flex items-center">
          <img
            src="/form-title.png"
            alt="Volamex Logo"
            className="w-auto max-w-[140px] object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-10 mb-1 text-2xl font-semibold text-[#000] sm:text-2xl md:mt-20">
          <span className="font-bold">Password Reset</span>
        </h2>

        {/* Sub Text */}
        <p className="mb-10 text-sm font-[400] text-[#8181A5]">
          Please enter your new password for reset
        </p>

        {/* Input Field */}
        <div className="">
          <InputField label="New Password" type="password" icon={Eye} />
        </div>

        <div className="mb-4">
          <InputField label="Confirm Password" type="password" icon={Key} />
        </div>

        {/* Button */}
        <div className="mx-auto mt-12 flex w-[50%] items-center justify-center space-x-3 md:mx-0 md:mr-2 md:w-[50%] md:justify-start">
          <PrimaryButton text="Reset" className="px-4 py-2" />
        </div>
      </div>

      {/* Right Blue Section */}
      <div className="h-full w-full md:-ml-[4px] md:w-1/2">
        <RightSection
          imageSrc="/sign-in.svg"
          text="Volamax connects you with multiple Importers/Exporters
          from across the borders in a secure way"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
