'use client';

import React from 'react';
import StatsCard from '../common/StatsCard';
import EmissionsTrajectory from './EmissionsTrajectory';
import TargetDetails from './TargetDetails';
import ReductionInitiatives from './ReductionInitiatives';

const TargetsAndPerformanceContent: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Targets & Performance</h1>
        <p className="text-gray-600">Track progress towards decarbonization goals and manage reduction initiatives</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Active Targets"
          value="3"
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="7.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="4.17" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="0.83" fill="#0D9488"/>
            </svg>
          }
        />
        <StatsCard
          title="Average Progress"
          value="48"
          unit="%"
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 15L6.67 10L10 13.33L13.33 8.33L17.5 15" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 15H17.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <StatsCard
          title="On Track"
          value="1/3"
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5.83C2.5 4.75 3.25 4 4.33 4H15.67C16.75 4 17.5 4.75 17.5 5.83V14.17C17.5 15.25 16.75 16 15.67 16H4.33C3.25 16 2.5 15.25 2.5 14.17V5.83Z" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.33 2.5V5.83" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.67 2.5V5.83" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 8.33H17.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <StatsCard
          title="Initiative Savings"
          value="4,811"
          unit="tCO₂e/year"
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 2.5L6.25 10H10L8.75 17.5L13.75 10H10L11.25 2.5Z" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#0D9488"/>
            </svg>
          }
        />
      </div>

      {/* Emissions Trajectory Chart */}
      <div className="mb-6">
        <EmissionsTrajectory />
      </div>

      {/* Target Details */}
      <div className="mb-6">
        <TargetDetails />
      </div>

      {/* Reduction Initiatives */}
      <ReductionInitiatives />
    </div>
  );
};

export default TargetsAndPerformanceContent;

