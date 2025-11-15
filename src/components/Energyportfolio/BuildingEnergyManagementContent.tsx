'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import Tabs from '../common/Tabs';
import BuildingEnergyManagementStats from './BuildingEnergyManagementStats';
import EnergyConsumptionNormalization from './EnergyConsumptionNormalization';
import FuelMixAnalysis from './FuelMixAnalysis';
import IntervalData from './IntervalData';
import UtilityBillsTracker from './UtilityBillsTracker';
import BuildingPerformanceRatings from './BuildingPerformanceRatings';

const BuildingEnergyManagementContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { label: 'Overview', value: 'overview' },
    { label: 'Interval Data', value: 'interval-data' },
    { label: 'Utility Bills', value: 'utility-bills' },
    { label: 'Ratings', value: 'ratings' },
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Building Energy Management
          </h1>
          <p className="text-sm text-gray-600">
            Utility tracking, meter analytics, and energy performance ratings
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12V4M4 8L8 4L12 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Upload Bills
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4V12M4 8L8 12L12 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8">
        <BuildingEnergyManagementStats />
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="mt-6">
          <EnergyConsumptionNormalization />
          <FuelMixAnalysis />
        </div>
      )}
      {activeTab === 'interval-data' && (
        <div className="mt-6">
          <IntervalData />
        </div>
      )}
      {activeTab === 'utility-bills' && (
        <div className="mt-6">
          <UtilityBillsTracker />
        </div>
      )}
      {activeTab === 'ratings' && (
        <div className="mt-6">
          <BuildingPerformanceRatings />
        </div>
      )}
    </div>
  );
};

export default BuildingEnergyManagementContent;

