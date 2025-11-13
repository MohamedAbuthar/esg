'use client';

import React from 'react';
import StatsCard from '../common/StatsCard';

const SupplyChainStatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <StatsCard
        title="Total Scope 3"
        value="44,749"
        unit="tCO₂e"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33 5.83H16.67V14.17H3.33V5.83Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.67 5.83V3.33C6.67 2.92 7.08 2.5 7.5 2.5H12.5C12.92 2.5 13.33 2.92 13.33 3.33V5.83" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 5.83V14.17" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
      <StatsCard
        title="Active Suppliers"
        value="382"
        subtitle="across all categories"
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
        title="PCF Submissions"
        value="127"
        change="+23 this month"
        changeType="positive"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 15L6.67 10L10 13.33L13.33 8.33L17.5 15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 5V15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
    </div>
  );
};

export default SupplyChainStatsCards;

