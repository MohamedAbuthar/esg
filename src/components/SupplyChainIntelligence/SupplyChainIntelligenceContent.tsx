'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import Tabs from '../common/Tabs';
import SupplyChainIntelligenceStatsCards from './SupplyChainIntelligenceStatsCards';
import SpendBasedEmissionsByCategory from './SpendBasedEmissionsByCategory';
import EmissionsIntensity from './EmissionsIntensity';
import SupplierEmissionsSpendAnalysis from './SupplierEmissionsSpendAnalysis';
import DataQualityImprovement from './DataQualityImprovement';
import EngagementCampaigns from './EngagementCampaigns';
import LaunchNewCampaign from './LaunchNewCampaign';
import EngagementPerformance from './EngagementPerformance';
import SupplierRiskMatrix from './SupplierRiskMatrix';
import RiskScoringBreakdown from './RiskScoringBreakdown';
import AutomatedDataRequests from './AutomatedDataRequests';
import CreateDataRequest from './CreateDataRequest';
import SupplyChainDecarbonizationProgress from './SupplyChainDecarbonizationProgress';
import DecarbonizationMetricsCards from './DecarbonizationMetricsCards';

const SupplyChainIntelligenceContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('spend-based');

  const tabs = [
    { label: 'Spend-Based Emissions', value: 'spend-based' },
    { label: 'Supplier Engagement', value: 'supplier-engagement' },
    { label: 'Risk Scoring', value: 'risk-scoring' },
    { label: 'Data Requests', value: 'data-requests' },
    { label: 'Decarbonization', value: 'decarbonization' },
  ];

  return (
    <div className="p-6">
      {/* Header with Title, Subtitle, and Action Buttons */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Supply Chain Intelligence</h1>
          <p className="text-gray-600">Advanced supplier engagement, risk scoring, and emissions tracking.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2.5V10M10 2.5L7.5 5M10 2.5L12.5 5M2.5 12.5V15.83C2.5 16.75 3.25 17.5 4.17 17.5H15.83C16.75 17.5 17.5 16.75 17.5 15.83V12.5M5 10V15.83C5 16.75 5.75 17.5 6.67 17.5H13.33C14.25 17.5 15 16.75 15 15.83V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Export Report
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5.83L10 2.5L17.5 5.83V10C17.5 14.17 13.33 17.5 10 17.5C6.67 17.5 2.5 14.17 2.5 10V5.83Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 10L9.17 11.67L12.5 8.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Launch Campaign
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-6">
        <SupplyChainIntelligenceStatsCards />
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content based on active tab */}
      {activeTab === 'spend-based' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SpendBasedEmissionsByCategory />
            <EmissionsIntensity />
          </div>
          <SupplierEmissionsSpendAnalysis />
          <DataQualityImprovement />
        </div>
      )}
      {activeTab === 'supplier-engagement' && (
        <div className="space-y-6">
          <EngagementCampaigns />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LaunchNewCampaign />
            <EngagementPerformance />
          </div>
        </div>
      )}
      {activeTab === 'risk-scoring' && (
        <div className="space-y-6">
          <SupplierRiskMatrix />
          <RiskScoringBreakdown />
        </div>
      )}
      {activeTab === 'data-requests' && (
        <div className="space-y-6">
          <AutomatedDataRequests />
          <CreateDataRequest />
        </div>
      )}
      {activeTab === 'decarbonization' && (
        <div className="space-y-6">
          <SupplyChainDecarbonizationProgress />
          <DecarbonizationMetricsCards />
        </div>
      )}
      {activeTab !== 'spend-based' && activeTab !== 'supplier-engagement' && activeTab !== 'risk-scoring' && activeTab !== 'data-requests' && activeTab !== 'decarbonization' && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <p className="text-gray-600">Content for {tabs.find(t => t.value === activeTab)?.label} will be displayed here</p>
        </div>
      )}
    </div>
  );
};

export default SupplyChainIntelligenceContent;

