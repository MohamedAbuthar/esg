import React from 'react';
import StatsCard from '../common/StatsCard';

const GovernanceStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Board Independence */}
      <StatsCard
        title="Board Independence"
        value="67"
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

      {/* Female Directors */}
      <StatsCard
        title="Female Directors"
        value="33"
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

      {/* Ethics Training */}
      <StatsCard
        title="Ethics Training"
        value="98.5"
        unit="% complete"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5L12.5 7.5L18.33 8.33L14.17 12.08L15 17.5L10 14.58L5 17.5L5.83 12.08L1.67 8.33L7.5 7.5L10 2.5Z"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Whistleblower Cases */}
      <StatsCard
        title="Whistleblower Cases"
        value="7"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5L3.33 15.83H16.67L10 2.5Z"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 8.33V11.67"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 14.17H10.01"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Corruption Incidents */}
      <StatsCard
        title="Corruption Incidents"
        value="0"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10"
              r="7.5"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 10L9.17 11.67L12.5 8.33"
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

export default GovernanceStats;

