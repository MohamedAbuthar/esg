'use client';

import React from 'react';

interface Target {
  name: string;
  status: 'Needs Action' | 'On Track';
  statusColor: 'green' | 'blue';
  scope: string;
  baseYear: string;
  baseYearValue: string;
  target: string;
  progress: number;
}

const TargetDetails: React.FC = () => {
  const targets: Target[] = [
    {
      name: 'Net Zero by 2050',
      status: 'Needs Action',
      statusColor: 'green',
      scope: 'All Scopes',
      baseYear: '2020',
      baseYearValue: '1,85,432 tCO₂e',
      target: '100% by 2050',
      progress: 32,
    },
    {
      name: 'SBTi Near-term',
      status: 'On Track',
      statusColor: 'blue',
      scope: 'Scope 1+2',
      baseYear: '2020',
      baseYearValue: '95,678 tCO₂e',
      target: '50% by 2030',
      progress: 67,
    },
    {
      name: 'Scope 3 Reduction',
      status: 'Needs Action',
      statusColor: 'green',
      scope: 'Scope 3',
      baseYear: '2020',
      baseYearValue: '89,754 tCO₂e',
      target: '30% by 2030',
      progress: 45,
    },
  ];

  const getStatusPillClass = (statusColor: string) => {
    switch (statusColor) {
      case 'green':
        return 'bg-green-600 text-white';
      case 'blue':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Target Details</h2>
        <p className="text-sm text-gray-600">Progress towards reduction commitments</p>
      </div>

      <div className="space-y-6">
        {targets.map((target, index) => (
          <div key={index} className={index !== targets.length - 1 ? 'pb-6 border-b border-gray-200' : ''}>
            {/* Target Name and Status */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-gray-900">{target.name}</h3>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusPillClass(
                  target.statusColor
                )}`}
              >
                {target.status}
              </span>
            </div>

            {/* Details */}
            <p className="text-sm text-gray-700 mb-4">
              <span className="font-medium">Scope:</span> {target.scope} •{' '}
              <span className="font-medium">Base Year:</span> {target.baseYear} ({target.baseYearValue}) •{' '}
              <span className="font-medium">Target:</span> {target.target}
            </p>

            {/* Progress Bar and Percentage */}
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="w-full h-3 bg-green-100 rounded-full overflow-hidden flex items-center">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${target.progress}%`, backgroundColor: '#0D9488' }}
                  />
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${100 - target.progress}%` }}
                  />
                </div>
              </div>
              <div className="text-right min-w-[80px]">
                <div className="text-2xl font-bold text-gray-900 leading-tight">{target.progress}%</div>
                <div className="text-sm text-gray-500 mt-0.5">Complete</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetDetails;

