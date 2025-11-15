'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import Tabs from '../common/Tabs';
import SocialMetricsStats from './SocialMetricsStats';
import EmployeeSafetyHealthChart from './EmployeeSafetyHealthChart';
import DiversityInclusionMetrics from './DiversityInclusionMetrics';
import CommunityImpactPrograms from './CommunityImpactPrograms';
import LogSafetyIncident from './LogSafetyIncident';
import GovernanceStats from './GovernanceStats';
import BoardCompositionCharts from './BoardCompositionCharts';
import EthicsCompliancePolicies from './EthicsCompliancePolicies';
import WhistleblowerCaseTracker from './WhistleblowerCaseTracker';
import HumanRightsStats from './HumanRightsStats';
import HumanRightsRiskAssessment from './HumanRightsRiskAssessment';
import SupplierHumanRightsAssessments from './SupplierHumanRightsAssessments';
import SupplyChainRiskDistribution from './SupplyChainRiskDistribution';

const SocialGovernanceContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('social-metrics');

  const tabs = [
    {
      label: 'Social Metrics',
      value: 'social-metrics',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8C9.1 8 10 7.1 10 6C10 4.9 9.1 4 8 4C6.9 4 6 4.9 6 6C6 7.1 6.9 8 8 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12C12 10 10 8 8 8C6 8 4 10 4 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12 6.55 12.45 7 13 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 12C13 11.45 12.55 11 12 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: 'Governance',
      value: 'governance',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.33L2.67 4.67V7.33C2.67 10.67 5.33 13.67 8 14.67C10.67 13.67 13.33 10.67 13.33 7.33V4.67L8 1.33Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8.67V5.33"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8.67L10 6.67"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: 'Human Rights',
      value: 'human-rights',
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13.33C11.22 13.33 13.33 11.22 13.33 8C13.33 4.78 11.22 2.67 8 2.67C4.78 2.67 2.67 4.78 2.67 8C2.67 11.22 4.78 13.33 8 13.33Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2.67V4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12V13.33"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.33 8H14.67"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33 8H2.67"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3 4.7L12.24 3.76"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.76 12.24L4.7 11.3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.24 12.24L11.3 11.3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.7 4.7L3.76 3.76"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6L6.67 8L8 10L9.33 8L8 6Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Social & Governance
          </h1>
          <p className="text-sm text-gray-600">
            Track social impact, workforce metrics, governance practices, and human rights.
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

      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        width="full"
        size="md"
      />

      {/* Content based on active tab */}
      {activeTab === 'social-metrics' && (
        <div className="mt-6">
          <SocialMetricsStats />
          <EmployeeSafetyHealthChart />
          <DiversityInclusionMetrics />
          <CommunityImpactPrograms />
          <LogSafetyIncident />
        </div>
      )}
      {activeTab === 'governance' && (
        <div className="mt-6">
          <GovernanceStats />
          <BoardCompositionCharts />
          <EthicsCompliancePolicies />
          <WhistleblowerCaseTracker />
        </div>
      )}
      {activeTab === 'human-rights' && (
        <div className="mt-6">
          <HumanRightsStats />
          <HumanRightsRiskAssessment />
          <SupplierHumanRightsAssessments />
          <SupplyChainRiskDistribution />
        </div>
      )}
    </div>
  );
};

export default SocialGovernanceContent;

