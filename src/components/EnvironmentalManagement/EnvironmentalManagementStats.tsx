import React from 'react';
import StatsCard from '../common/StatsCard';

const EnvironmentalManagementStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Water Withdrawal */}
      <StatsCard
        title="Total Water Withdrawal"
        value="1,45,678"
        unit="m³/year"
        change="-8.2% vs last year"
        changeType="negative"
        icon={
          <div className="flex items-center justify-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.67C6.95 1.67 4.5 4.12 4.5 7.17C4.5 11.25 10 18.33 10 18.33C10 18.33 15.5 11.25 15.5 7.17C15.5 4.12 13.05 1.67 10 1.67Z"
                fill="white"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.67C6.95 1.67 4.5 4.12 4.5 7.17C4.5 11.25 10 18.33 10 18.33C10 18.33 15.5 11.25 15.5 7.17C15.5 4.12 13.05 1.67 10 1.67Z"
                fill="white"
              />
            </svg>
          </div>
        }
      />

      {/* Water Intensity */}
      <StatsCard
        title="Water Intensity"
        value="4.5"
        unit="m³/employee"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 20L7 16L11 18L15 12L19 14L21 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Recycled Water */}
      <StatsCard
        title="Recycled Water"
        value="16"
        unit="%"
        change="+3.2% vs last year"
        changeType="positive"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M9 12L11 14L15 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Water Stress Risk */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-2">
              Water Stress Risk
            </p>
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-600 text-white">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5 flex-shrink-0"
                >
                  <path
                    d="M6 1L1 11H11L6 1Z"
                    fill="white"
                  />
                  <path
                    d="M6 4V7M6 8.5H6.01"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Medium
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              45% of sites in water stress areas
            </p>
            <p className="text-xs text-gray-400">
              Based on WRI Aqueduct assessment
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                fill="#1E40AF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalManagementStats;

