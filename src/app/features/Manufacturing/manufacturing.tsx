'use client';

import React from 'react';

import Image from 'next/image';

import { Info, InfoIcon, PencilIcon } from 'lucide-react';

import Breadcrumb from '@/app/components/Common/Breadcrumb';
import { PrimaryButton } from '@/app/components/Common/PrimaryButton/PrimaryButton';
import ProfileInput from '@/app/components/Common/ProfileInput';

import { BREADCRUMB_ITEMS } from './constant';

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-[1440px] space-y-2">
        {/* Breadcrumb */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">
            Manufacturing Details
          </h2>

          <div className="shadow-elevation-3 space-y-6 rounded-xl border border-gray-100 bg-white p-6">
            <div className="flex items-center gap-3 rounded-sm bg-[#F7FAFF] px-2 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#163B82] text-white">
                <InfoIcon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-[#000000]">
                Does the company manufacture?{' '}
                <span className="font-bold text-[#4887F6]">[Yes / No]</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Started In Year" />
              <ProfileInput label="Products" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Capacity" />
            </div>

            <h3 className="text-lg font-bold text-[#000000]">Factory Info</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Factory Size" />
              <ProfileInput label="Staff" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Location" />
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

export default Manufacturing;
