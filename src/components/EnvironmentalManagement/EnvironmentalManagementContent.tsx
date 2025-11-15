'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import Tabs from '../common/Tabs';
import EnvironmentalManagementStats from './EnvironmentalManagementStats';
import WaterConsumptionTrend from './WaterConsumptionTrend';
import WaterBySource from './WaterBySource';
import LogWaterConsumption from './LogWaterConsumption';
import WasteManagementStats from './WasteManagementStats';
import WasteByType from './WasteByType';
import MonthlyWasteTrend from './MonthlyWasteTrend';
import WasteStreamDetails from './WasteStreamDetails';
import LogWasteGeneration from './LogWasteGeneration';
import BiodiversityStats from './BiodiversityStats';
import HabitatDistributionChart from './HabitatDistributionChart';
import BiodiversityRestorationProjects from './BiodiversityRestorationProjects';
import BiodiversityImpactAssessment from './BiodiversityImpactAssessment';

const EnvironmentalManagementContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('water');

  const tabs = [
    {
      label: 'Water',
      value: 'water',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.33C5.42 1.33 3.33 3.42 3.33 6C3.33 9.5 8 15.33 8 15.33C8 15.33 12.67 9.5 12.67 6C12.67 3.42 10.58 1.33 8 1.33Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="8"
            cy="6"
            r="1.33"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: 'Waste',
      value: 'waste',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4H14M5.33 4V2.67C5.33 2.3 5.63 2 6 2H10C10.37 2 10.67 2.3 10.67 2.67V4M6.67 7.33V12M9.33 7.33V12M4 4L4.67 13.33C4.67 13.7 4.97 14 5.33 14H10.67C11.03 14 11.33 13.7 11.33 13.33L12 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: 'Biodiversity',
      value: 'biodiversity',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2.67L4 6.67V8C4 10.22 5.78 12 8 12C10.22 12 12 10.22 12 8V6.67L8 2.67Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8L7.33 9.33L10 6.67"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Environmental Management
          </h1>
          <p className="text-sm text-gray-600">
            Track water, waste, and biodiversity metrics beyond carbon
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
            Import Data
          </Button>
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

      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'water' && (
        <div className="mt-6">
          <EnvironmentalManagementStats />
          <WaterConsumptionTrend />
          <WaterBySource />
          <LogWaterConsumption />
        </div>
      )}
      {activeTab === 'waste' && (
        <div className="mt-6">
          <WasteManagementStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <WasteByType />
            <MonthlyWasteTrend />
          </div>
          <WasteStreamDetails />
          <LogWasteGeneration />
        </div>
      )}
      {activeTab === 'biodiversity' && (
        <div className="mt-6">
          <BiodiversityStats />
          <HabitatDistributionChart />
          <BiodiversityRestorationProjects />
          <BiodiversityImpactAssessment />
        </div>
      )}
    </div>
  );
};

export default EnvironmentalManagementContent;

