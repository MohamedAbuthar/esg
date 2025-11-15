import React from 'react';
import StatsCard from '../common/StatsCard';

const WasteManagementStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Waste Generated */}
      <StatsCard
        title="Total Waste Generated"
        value="4,302"
        unit="tons/year"
        change="-3.4% vs last year"
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
              d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 11V17M14 11V17"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Waste Diversion Rate */}
      <StatsCard
        title="Waste Diversion Rate"
        value="72.5"
        unit="%"
        change="+5.3% vs last year"
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
              d="M3 20L7 16L11 18L15 12L19 14L21 10"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Recycled */}
      <StatsCard
        title="Recycled"
        value="2,451"
        unit="tons"
        change="+8.2% vs last year"
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
              stroke="#1E40AF"
              strokeWidth="2"
            />
            <path
              d="M9 12L11 14L15 10"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* To Landfill */}
      <StatsCard
        title="To Landfill"
        value="904"
        unit="tons"
        change="-12.5% vs last year"
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
              d="M12 2L1 21H23L12 2Z"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 9V13M12 17H12.01"
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

export default WasteManagementStats;

