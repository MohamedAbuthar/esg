'use client';

import React from 'react';

const DataQualityScore: React.FC = () => {
  const metrics = [
    { label: 'Overall Score', value: 93.1 },
    { label: 'Completeness', value: 94.5 },
    { label: 'Timeliness', value: 88.2 },
    { label: 'Accuracy', value: 96.7 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-600"
        >
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 10L9.17 11.67L12.5 8.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h2 className="text-lg font-semibold text-gray-900">Data Quality Score</h2>
      </div>

      {/* Metrics with Progress Bars */}
      <div className="space-y-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{metric.label}</span>
              <span className="text-sm font-semibold text-gray-900">{metric.value}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
              <div className="h-full rounded-full" style={{ width: `${metric.value}%`, backgroundColor: '#0D9488' }}></div>
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${100 - metric.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Data */}
      <div className="pt-4 border-t border-gray-200 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Total Data Points:</span>
          <span className="text-sm font-bold text-gray-900">12,847</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Automated:</span>
          <span className="text-sm font-bold text-green-600">72%</span>
        </div>
      </div>
    </div>
  );
};

export default DataQualityScore;

