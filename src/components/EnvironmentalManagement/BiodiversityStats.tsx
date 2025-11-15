import React from 'react';
import StatsCard from '../common/StatsCard';

const BiodiversityStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Protected Area */}
      <StatsCard
        title="Protected Area"
        value="234"
        unit="hectares"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* First tree - rounded canopy */}
            <path
              d="M5 16V18H7V16"
              stroke="#1E40AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="6"
              cy="12"
              r="3"
              stroke="#1E40AF"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Second tree - pointed canopy */}
            <path
              d="M13 16V18H15V16"
              stroke="#1E40AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 9L11 12L17 12L14 9Z"
              stroke="#1E40AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Native Species */}
      <StatsCard
        title="Native Species"
        value="67"
        unit="species"
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
              r="8"
              stroke="#1E40AF"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M7 10L9 12L13 8"
              stroke="#1E40AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Restoration Projects */}
      <StatsCard
        title="Restoration Projects"
        value="8"
        unit="active"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 16L6 12L10 14L14 8L18 10"
              stroke="#1E40AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Biodiversity Score */}
      <StatsCard
        title="Biodiversity Score"
        value="6.8"
        unit="/10"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* First tree - rounded canopy */}
            <path
              d="M5 16V18H7V16"
              stroke="#1E40AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="6"
              cy="12"
              r="3"
              stroke="#1E40AF"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Second tree - pointed canopy */}
            <path
              d="M13 16V18H15V16"
              stroke="#1E40AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 9L11 12L17 12L14 9Z"
              stroke="#1E40AF"
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

export default BiodiversityStats;

