'use client';

import React, { useState } from 'react';

import { Plus } from 'lucide-react';

import Breadcrumb from '@/app/components/Common/Breadcrumb';
import DataTable from '@/app/components/Common/DataTable';
import { PrimaryButton } from '@/app/components/Common/PrimaryButton/PrimaryButton';

import {
  BREADCRUMB_ITEMS,
  CERTIFICATE_TABLE_COLUMNS,
  MOCK_CERTIFICATE_DATA,
  TABS,
} from './constant';

const DocsCentre = () => {
  const [activeTab, setActiveTab] = useState('Certificates');

  return (
    <div className="mx-auto max-w-[1440px] space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Docs Centre</h1>
        <div className="w-48">
          <PrimaryButton text="Add New Certificate" icon={Plus} />
        </div>
      </div>

      {/* Main Content Box with Shadow */}
      <div className="rounded-[25px] bg-white p-6 shadow-elevation-3">
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex gap-2">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Data Table */}
          <DataTable
            columns={CERTIFICATE_TABLE_COLUMNS}
            data={MOCK_CERTIFICATE_DATA}
          />
        </div>
      </div>
    </div>
  );
};

export default DocsCentre;

