'use client';

import React, { useState } from 'react';
import Tabs from '../common/Tabs';
import Scope1EmissionsBySource from './Scope1EmissionsBySource';
import DetailedScope1Data from './DetailedScope1Data';
import Scope2MethodCards from './Scope2MethodCards';
import DetailedScope2Data from './DetailedScope2Data';

const EmissionsScope12Content: React.FC = () => {
  const [activeTab, setActiveTab] = useState('scope1');

  const tabs = [
    { label: 'Scope 1 - Direct Emissions', value: 'scope1' },
    { label: 'Scope 2 - Indirect Emissions', value: 'scope2' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Emissions Management</h1>
        <p className="text-gray-600">Scope 1 & 2 emissions tracking and analysis</p>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content based on active tab */}
      {activeTab === 'scope1' && (
        <div className="space-y-6">
          <Scope1EmissionsBySource />
          <DetailedScope1Data />
        </div>
      )}
      {activeTab === 'scope2' && (
        <div className="space-y-6">
          <Scope2MethodCards />
          <DetailedScope2Data />
        </div>
      )}
    </div>
  );
};

export default EmissionsScope12Content;

