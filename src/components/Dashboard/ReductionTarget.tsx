'use client';

import React from 'react';

const ReductionTarget: React.FC = () => {
  const progress = 67; // 67% progress to target
  const baseline = 185432;
  const current = 125847;
  const target = 92716;
  const emissionsReduced = baseline - current;
  const reductionPercentage = ((emissionsReduced / baseline) * 100).toFixed(0);
  const remainingToTarget = current - target;
  const remainingPercentage = ((remainingToTarget / baseline) * 100).toFixed(0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="10" r="4.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="10" r="0.83" fill="currentColor"/>
        </svg>
        <h2 className="text-lg font-semibold text-gray-900">2030 Reduction Target</h2>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress to 50% Reduction</span>
          <span className="text-sm font-semibold text-gray-900">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
          <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: '#0D9488' }}></div>
          <div className="h-full bg-green-500 rounded-full" style={{ width: `${100 - progress}%` }}></div>
        </div>
      </div>

      {/* Emission Figures */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Baseline (2020):</span>
          <span className="text-base font-bold text-gray-900">{baseline.toLocaleString()} tCO₂e</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Current (2024):</span>
          <span className="text-base font-bold text-blue-600">{current.toLocaleString()} tCO₂e</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Target (2030):</span>
          <span className="text-base font-bold text-green-600">{target.toLocaleString()} tCO₂e</span>
        </div>
      </div>

      {/* Reduction Summary */}
      <div className="pt-4 border-t border-gray-200 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Emissions Reduced:</span>
          <span className="text-sm font-semibold text-gray-900">
            {emissionsReduced.toLocaleString()} tCO₂e
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Reduction:</span>
          <span className="text-sm font-semibold text-gray-900">-{reductionPercentage}%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Remaining to Target:</span>
          <span className="text-sm font-semibold text-orange-600">
            {remainingToTarget.toLocaleString()} tCO₂e
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Remaining Reduction:</span>
          <span className="text-sm font-semibold text-orange-600">-{remainingPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ReductionTarget;

