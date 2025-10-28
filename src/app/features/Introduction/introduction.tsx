'use client';

import React from 'react';

import Breadcrumb from '@/app/components/Common/Breadcrumb';
import { PrimaryButton } from '@/app/components/Common/PrimaryButton/PrimaryButton';
import ProfileInput from '@/app/components/Common/ProfileInput';

import { BREADCRUMB_ITEMS } from './constant';

const Introduction = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-[1440px] space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#163b82]">Introduction</h1>

        {/* Main Content Card */}
        <div className="rounded-[25px] bg-white p-6 shadow-elevation-3">
          <div className="space-y-6">
            {/* Row 1: Upload Logo and Brochure */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput
                label="Upload Logo"
                iconImage="/introduction-icon.svg"
              />
              <ProfileInput
                label="Brochure"
                iconImage="/introduction-icon.svg"
              />
            </div>

            {/* Row 2: Gallery and Response Time */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput
                label="Gallery"
                iconImage="/introduction-icon.svg"
              />
              <ProfileInput
                label="Response Time"
                optional
                optionalText="(Hours)"
              />
            </div>

            {/* Row 3: Description (Full Width) */}
            <div>
              <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="w-full rounded-[8px] px-3 py-2 outline-none"
                style={{ backgroundColor: '#F7FAFF', minHeight: '120px' }}
                placeholder="Enter description..."
              />
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <div className="w-24">
                <PrimaryButton text="Save" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

