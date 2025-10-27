'use client';

import { useRouter } from 'next/navigation';

import { CheckCircle } from 'lucide-react';

import PrimaryButton from '@/app/components/Common/PrimaryButton';
import RightSection from '@/app/components/Common/RightSection';

const VerifyEmail = () => {
  const router = useRouter();

  const handleContinueClick = () => {
    router.push('/login');
  };

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

        {/* Success Icon and Heading */}
        <div className="mt-10 flex flex-col items-center justify-center md:mt-24">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h2 className="mb-2 text-center text-2xl font-semibold text-[#000] sm:text-2xl">
            Email Verified Successfully!
          </h2>

          <p className="mb-10 text-center text-sm font-[400] text-[#8181A5]">
            Your email has been verified. You can now proceed to sign in.
          </p>
        </div>

        {/* Button */}
        <div className="mx-auto flex w-[50%] items-center justify-center space-x-3 md:mx-0 md:w-auto md:justify-start">
          <PrimaryButton
            text="Continue to Sign In"
            className="px-6 py-2"
            onClick={handleContinueClick}
          />
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

export default VerifyEmail;
