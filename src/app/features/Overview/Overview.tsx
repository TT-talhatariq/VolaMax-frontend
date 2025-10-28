'use client';

import React from 'react';

import Breadcrumb from '@/app/components/Common/Breadcrumb';

import { BREADCRUMB_ITEMS } from './constant';

const Overview = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-[1440px] space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
        <div>Overview</div>
      </div>
    </div>
  );
};

export default Overview;
