'use client';

import React from 'react';
import { Button } from '../ui/button';

interface MetricItem {
  label: string;
  current: number;
  target: number;
}

const DiversityInclusionMetrics: React.FC = () => {
  const metrics: MetricItem[] = [
    { label: 'Gender - Female', current: 42, target: 50 },
    { label: 'Gender - Male', current: 58, target: 50 },
    { label: 'Leadership - Female', current: 35, target: 45 },
    { label: 'Ethnic Minority', current: 28, target: 30 },
    { label: 'Disability Inclusion', current: 8, target: 10 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Diversity & Inclusion Metrics
        </h2>
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
              d="M8 3.33V12.67M3.33 8H12.67"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Update Metrics
        </Button>
      </div>

      {/* Metrics List */}
      <div className="space-y-5">
        {metrics.map((metric, index) => {
          const exceedsTarget = metric.current > metric.target;
          // Bar represents 100% width, percentages are shown as-is
          const achievedWidth = metric.current;
          const remainingWidth = exceedsTarget
            ? 0
            : metric.target - metric.current;

          return (
            <div key={index} className="space-y-2">
              {/* Label and Percentages */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {metric.label}
                </span>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-900">
                    {metric.current}%
                  </span>
                  <span className="text-gray-500">
                    ({metric.target}%)
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-6 bg-gray-100 rounded-full overflow-hidden">
                {/* Achieved portion (dark teal) */}
                <div
                  className="absolute left-0 top-0 h-full bg-teal-600 transition-all duration-300"
                  style={{
                    width: `${achievedWidth}%`,
                  }}
                />
                {/* Remaining to target (light green) */}
                {!exceedsTarget && remainingWidth > 0 && (
                  <div
                    className="absolute h-full bg-green-300 transition-all duration-300"
                    style={{
                      left: `${achievedWidth}%`,
                      width: `${remainingWidth}%`,
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiversityInclusionMetrics;

