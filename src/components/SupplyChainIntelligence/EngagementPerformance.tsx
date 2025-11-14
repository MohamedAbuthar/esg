'use client';

import React from 'react';

const EngagementPerformance: React.FC = () => {
  const metrics = [
    { label: 'Total Campaigns Launched', value: '3' },
    { label: 'Suppliers Contacted', value: '150' },
    { label: 'Overall Response Rate', value: '82.7%', isHighlighted: true },
    { label: 'Data Submissions', value: '115' },
    { label: 'Avg Time to Response', value: '12.5 days' },
  ];

  const topSuppliers = [
    { name: 'Global Materials Co', rate: '100%' },
    { name: 'EuroParts Manufacturing', rate: '90%' },
    { name: 'TechComponents Inc', rate: '85%' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Engagement Performance</h2>
        <p className="text-sm text-gray-600">Key metrics across all campaigns</p>
      </div>

      <div className="space-y-6">
        {/* Metrics Section */}
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{metric.label}</span>
              <span className={`text-sm font-semibold ${metric.isHighlighted ? 'text-green-600' : 'text-gray-900'}`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Top Performing Suppliers Section */}
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Top Performing Suppliers</h3>
          <div className="space-y-3">
            {topSuppliers.map((supplier, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{supplier.name}</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {supplier.rate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementPerformance;

