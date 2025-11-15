import React from 'react';
import StatsCard from '../common/StatsCard';

const BuildingEnergyManagementStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Electricity */}
      <StatsCard
        title="Total Electricity"
        value="1710"
        unit="MWh"
        change="-8.4% vs last year"
        changeType="negative"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              fill="#1E40AF"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Total Gas */}
      <StatsCard
        title="Total Gas"
        value="659"
        unit="km³"
        change="-12.3% vs last year"
        changeType="negative"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2V6M12 18V22M8 12H4M20 12H16"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z"
              fill="#1E40AF"
            />
          </svg>
        }
      />

      {/* Avg ENERGY STAR */}
      <StatsCard
        title="Avg ENERGY STAR"
        value="81"
        unit="/100"
        change="+5.2% vs last year"
        changeType="positive"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8L10 10L8 14L12 12L16 14L14 10L18 8L14 6L12 2L10 6L6 8Z"
              fill="#1E40AF"
            />
            <path
              d="M4 18L6 16L8 18L7 15L9 13L6 13L5 10L4 13L1 13L3 15L4 18Z"
              fill="#1E40AF"
            />
          </svg>
        }
      />

      {/* Cost Savings YTD */}
      <StatsCard
        title="Cost Savings YTD"
        value="245"
        unit="k USD"
        change="+18.7% vs last year"
        changeType="positive"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18L7 14L11 16L15 10L19 12L21 8"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 8V20H3V18"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
    </div>
  );
};

export default BuildingEnergyManagementStats;

