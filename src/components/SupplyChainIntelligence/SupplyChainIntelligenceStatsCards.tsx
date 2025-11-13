'use client';

import React from 'react';
import StatsCard from '../common/StatsCard';

const SupplyChainIntelligenceStatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Total Scope 3 Emissions"
        value="48.8"
        unit="ktCO2e"
        change="-8.5% vs last year"
        changeType="negative"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 15L6.67 10L10 13.33L13.33 8.33L17.5 15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 5V15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
      <StatsCard
        title="Suppliers Engaged"
        value="4"
        subtitle="of 5"
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
        title="Response Rate"
        value="64%"
        subtitle="average"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5.83L10 2.5L17.5 5.83V10C17.5 14.17 13.33 17.5 10 17.5C6.67 17.5 2.5 14.17 2.5 10V5.83Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 10L9.17 11.67L12.5 8.33" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
      <StatsCard
        title="High Risk Suppliers"
        value="1"
        subtitle="require attention"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3.33L3.33 6.67V10C3.33 13.33 6.67 16.25 10 17.08C13.33 16.25 16.67 13.33 16.67 10V6.67L10 3.33Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 10V6.67" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13.33H10.01" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
    </div>
  );
};

export default SupplyChainIntelligenceStatsCards;

