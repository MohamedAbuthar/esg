import React from 'react';
import StatsCard from '../common/StatsCard';

const SocialGovernanceStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Total Employees */}
      <StatsCard
        title="Total Employees"
        value="3,245"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10C11.38 10 12.5 8.88 12.5 7.5C12.5 6.12 11.38 5 10 5C8.62 5 7.5 6.12 7.5 7.5C7.5 8.88 8.62 10 10 10Z"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 15C15 12.5 12.5 10 10 10C7.5 10 5 12.5 5 15"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 7.5C15 8.88 16.12 10 17.5 10"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 15C17.5 13.62 16.38 12.5 15 12.5"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* LTIFR */}
      <StatsCard
        title="LTIFR"
        value="0.8"
        unit="per 200k hrs"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5L3.33 5.83V9.17C3.33 13.33 6.67 17.08 10 18.33C13.33 17.08 16.67 13.33 16.67 9.17V5.83L10 2.5Z"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 10.83V7.5"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 10.83L12.5 8.33"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Training Hours */}
      <StatsCard
        title="Training Hours"
        value="45,678"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33 15.83H16.67V5.83H3.33V15.83Z"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.83 5.83V4.17C5.83 3.71 6.2 3.33 6.67 3.33H13.33C13.8 3.33 14.17 3.71 14.17 4.17V5.83"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 8.33V12.5"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 10.42L10 8.33L12.5 10.42"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Turnover Rate */}
      <StatsCard
        title="Turnover Rate"
        value="8.9"
        unit="%"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 15.83L6.67 11.67L10 15L14.17 8.33L17.5 12.5"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 12.5H14.17V15.83"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Community Investment */}
      <StatsCard
        title="Community Investment"
        value="$2.5M"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17.08C10 17.08 3.33 11.67 3.33 7.5C3.33 5.15 5.15 3.33 7.5 3.33C8.7 3.33 9.78 3.88 10.5 4.67C11.22 3.88 12.3 3.33 13.5 3.33C15.85 3.33 17.67 5.15 17.67 7.5C17.67 11.67 11 17.08 10 17.08Z"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
    </div>
  );
};

export default SocialGovernanceStats;

