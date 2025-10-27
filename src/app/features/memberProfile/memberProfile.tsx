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
  GENDER_OPTIONS,
  PAKISTAN_CITIES,
  PAKISTAN_PROVINCES,
} from './constant';

const MemberProfile = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-[1440px] space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">
            Personal info
          </h2>

          <div className="shadow-elevation-3 rounded-xl border border-gray-100 bg-white p-6">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/profile-icon.jpg"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>

              <div className="flex gap-3">
                <div className="w-32">
                  <PrimaryButton text="Upload New" />
                </div>
                <div className="w-28">
                  <OutlinedButton text="Delete" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="First Name" />
              <ProfileInput label="Last Name" />
              <ProfileInput
                label="Gender"
                isDropdown
                options={GENDER_OPTIONS}
              />
              <ProfileInput label="Job Title" optional />
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
            Personal info
          </h2>

          <div className="shadow-elevation-3 rounded-xl border border-gray-100 bg-white p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Primary Email" iconImage="/tick.png" />

              <ProfileInput label="Alternate Email" />
              <ProfileInput label="Phone" />
              <ProfileInput label="Alternate Phone" optional />
            </div>

            <div className="mt-6 flex justify-end">
              <div className="w-24">
                <PrimaryButton text="Edit" icon={PencilIcon} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">Address</h2>

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
      </div>
    </div>
  );
};

export default MemberProfile;
