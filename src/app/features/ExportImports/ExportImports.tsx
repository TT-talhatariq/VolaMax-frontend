'use client';

import React from 'react';

import { InfoIcon, PencilIcon, PlusIcon } from 'lucide-react';

import Breadcrumb from '@/app/components/Common/Breadcrumb';
import {
  OutlinedButton,
  PrimaryButton,
} from '@/app/components/Common/PrimaryButton/PrimaryButton';
import ProfileInput from '@/app/components/Common/ProfileInput';

import { BREADCRUMB_ITEMS, COUNTRIES, LANGUAGES, STAFF_OPTIONS } from './constant';

const ExportImport = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-[1440px] space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
        <div>
          <h2 className="mb-4 text-xl font-bold text-[#000000]">
            Export/Import Details
          </h2>

          <div className="mb-4 flex items-center justify-between gap-3 rounded-sm bg-[#F7FAFF] px-2 py-1">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#163B82] text-white">
                <InfoIcon size={18} />
              </div>

              <h3 className="text-lg font-semibold text-[#000000]">
                Do you Export, Import, or Both?
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="relative h-5 w-5 cursor-pointer appearance-none rounded border border-[#8181A5] bg-transparent transition-all duration-200 before:absolute before:top-[3px] before:left-[7.5px] before:h-[10px] before:w-[5px] before:rotate-45 before:border-r-[2px] before:border-b-[2px] before:border-[#163B82] before:opacity-0 before:content-[''] checked:before:opacity-100"
              />
              <span className="font-bold text-[#4887F6]">Export</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="shadow-elevation-3 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="mb-4 text-lg font-bold text-[#000000]">
              Export Details
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Total Export Revenue (USD)" />
              <ProfileInput
                label="Total Export Percentage"
                optional
                optionalText="%"
              />
              <ProfileInput
                label="Main Markets (select countries)"
                isDropdown
                options={COUNTRIES}
              />
              <ProfileInput label="Started Exports In (Year)" />
            </div>

            <h2 className="mt-10 mb-4 text-lg font-bold text-[#000000]">
              Customer Case’s
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Customer Name" />
              <ProfileInput
                label="Customer's Country/Region"
                isDropdown
                options={COUNTRIES}
              />

              <ProfileInput label="Products Supplied" />
              <ProfileInput label="Annual Turnover (USD)" />

              <ProfileInput
                label="Attach Photos"
                inputBgColor="#F7FAFF"
                iconImage="/file-icon.png"
              />

              <ProfileInput
                label="Attach Transaction Proof"
                inputBgColor="#F7FAFF"
                iconImage="/file-icon.png"
              />
            </div>
            <div className="mt-6 flex justify-end">
              <div className="w-32">
                <PrimaryButton text="Add More" icon={PlusIcon} />
              </div>
            </div>

            <h2 className="mb-6 text-lg font-bold text-[#000000]">
              Export Department Staffing
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Employees in Export Trade Dept" />
              <ProfileInput
                label="R&D Staff"
                isDropdown
                options={STAFF_OPTIONS}
              />
              <ProfileInput label="Q/C Staff" />
            </div>

            <h2 className="mt-10 mb-6 text-lg font-bold text-[#000000]">
              Export Department Staffing
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Employees in Export Trade Dept" />
              <ProfileInput
                label="R&D Staff"
                isDropdown
                options={STAFF_OPTIONS}
              />
              <ProfileInput label="Q/C Staff" />
            </div>

            <h2 className="mt-10 mb-6 text-lg font-bold text-[#000000]">
              Logistics & Trade Details
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProfileInput label="Nearest Port" />
              <ProfileInput label="Average Lead Time (days)" />
              <ProfileInput
                label="Preferred Delivery Terms"
                isDropdown
                options={STAFF_OPTIONS}
              />
              <ProfileInput
                label="Preferred Payment Terms"
                isDropdown
                options={STAFF_OPTIONS}
              />
              <ProfileInput
                label="Preferred Payment Currency"
                isDropdown
                options={STAFF_OPTIONS}
              />
              <ProfileInput
                label="Language(s) Spoken"
                isDropdown
                options={LANGUAGES}
              />
              <ProfileInput label="Current Broker (if any)" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-end gap-3">
        <div>
          <button className="rounded-sm bg-gradient-to-b from-[#D9D9D9] to-[#737373] px-6 py-2 font-bold text-[#737373]">
            Cancel
          </button>
        </div>
        <div className="w-48">
          <PrimaryButton text="Save Export Info" />
        </div>
      </div>
    </div>
  );
};

export default ExportImport;
