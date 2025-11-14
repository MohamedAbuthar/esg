'use client';

import React from 'react';
import ESGReportingFrameworksStats from './ESGReportingFrameworksStats';
import ReportingFrameworks from './ReportingFrameworks';
import QuickActions from './QuickActions';

const ESGReportingContent: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ESG Reporting & Frameworks</h1>
        <p className="text-gray-600">Manage disclosures and compliance across multiple frameworks</p>
      </div>

      {/* Stats Cards */}
      <div className="mb-6">
        <ESGReportingFrameworksStats />
      </div>

      {/* Reporting Frameworks */}
      <div className="mb-6">
        <ReportingFrameworks />
      </div>

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
};

export default ESGReportingContent;

