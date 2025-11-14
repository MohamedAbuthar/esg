'use client';

import React from 'react';
import StatsCard from '../common/StatsCard';

const SitesAndAssetsStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Total Sites"
        value="6"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33 17.5H16.67V8.33H3.33V17.5Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33 17.5V10.83H11.67V17.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33 8.33L10 2.5L16.67 8.33" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33 8.33H16.67" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
      <StatsCard
        title="Total Emissions"
        value="1,25,847"
        unit="tCO₂e"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 2.5L6.25 10H10L8.75 17.5L13.75 10H10L11.25 2.5Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#3B82F6"/>
          </svg>
        }
      />
      <StatsCard
        title="Total Employees"
        value="1,465"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10C11.38 10 12.5 8.88 12.5 7.5C12.5 6.12 11.38 5 10 5C8.62 5 7.5 6.12 7.5 7.5C7.5 8.88 8.62 10 10 10Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 15C15 12.5 12.5 10 10 10C7.5 10 5 12.5 5 15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 7.5C15 8.88 16.12 10 17.5 10" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 15C17.5 13.62 16.38 12.5 15 12.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
      <StatsCard
        title="Intensity"
        value="1.12"
        unit="tCO₂e/m²"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2.5C7.5 2.5 5.83 4.17 5.83 6.67C5.83 9.17 10 15.83 10 15.83C10 15.83 14.17 9.17 14.17 6.67C14.17 4.17 12.5 2.5 10 2.5Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="10" cy="6.67" r="1.67" fill="#3B82F6"/>
          </svg>
        }
      />
    </div>
  );
};

export default SitesAndAssetsStats;

