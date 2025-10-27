'use client';

import React from 'react';

import Image from 'next/image';

import { PencilIcon } from 'lucide-react';

import Breadcrumb from '@/app/components/Common/Breadcrumb';
import {
  OutlinedButton,
  PrimaryButton,
} from '@/app/components/Common/PrimaryButton/PrimaryButton';
import ProfileInput from '@/app/components/Common/ProfileInput';

import {
  BREADCRUMB_ITEMS,
  COUNTRIES,
  PAKISTAN_CITIES,
  PAKISTAN_PROVINCES,
} from './constant';

const BasicDetails = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-[1440px] space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">
            Company Info
          </h2>

          <div className="shadow-elevation-3 rounded-xl border border-gray-100 bg-white p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Company Name" />
              <ProfileInput
                label="Registered Country"
                isDropdown
                options={COUNTRIES}
              />
              <ProfileInput label="Year of Registration" />
              <ProfileInput label="Legal Owner" />
            </div>

            <div className="mt-6 flex justify-end">
              <div className="w-24">
                <PrimaryButton text="Edit" icon={PencilIcon} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">
            Operational Adress
          </h2>

          <div className="shadow-elevation-3 rounded-xl border border-gray-100 bg-white p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <ProfileInput
                label="Country"
                isDropdown
                options={COUNTRIES}
              />
              <ProfileInput
                label="Province"
                isDropdown
                options={PAKISTAN_PROVINCES}
              />
              <ProfileInput
                label="City"
                isDropdown
                options={PAKISTAN_CITIES}
              />
              <ProfileInput label="Zip" />
            </div>

            <div className="mt-6 flex justify-start">
              <div className="w-full md:w-1/2">
                <ProfileInput label="Street" />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <div className="w-24">
                <PrimaryButton text="Edit" icon={PencilIcon} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">
            Upload Documents
          </h2>

          <div className="shadow-elevation-3 rounded-xl border border-gray-100 bg-white p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Registration Docs" showUploadIcon />
              <ProfileInput label="Tax Certification" showUploadIcon />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">
            Employees info
          </h2>

          <div className="shadow-elevation-3 rounded-xl border border-gray-100 bg-white p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Employees" />

              <ProfileInput label="Office size" optional optionalText="Sqft" />

              <ProfileInput label="Website" />
              <ProfileInput label="Description" />
            </div>

            <div className="mt-6 flex justify-end">
              <div className="w-24">
                <PrimaryButton text="Edit" icon={PencilIcon} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">
            Upload Documents
          </h2>

          <div className="shadow-elevation-3 rounded-xl border border-gray-100 bg-white p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Registration Docs" />

              <ProfileInput label="Tax Certification" />
            </div>

            <div className="mt-10 flex justify-end">
              <div className="w-52">
                <PrimaryButton text="Submit For Verification" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <div className="w-52">
          <PrimaryButton text="Update Information" />
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
