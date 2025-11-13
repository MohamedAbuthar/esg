import React from 'react';
import StatsCard from '../common/StatsCard';
import EmissionsByScope from './EmissionsByScope';
import EmissionsTrends from './EmissionsTrends';
import EmissionsByRegion from './EmissionsByRegion';
import EnergyConsumptionMix from './EnergyConsumptionMix';
import ReductionTarget from './ReductionTarget';
import DataQualityScore from './DataQualityScore';

const DashboardContent: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Emissions Dashboard</h1>
        <p className="text-gray-600">Overview of your organization's carbon footprint and ESG metrics</p>
      </div>

      {/* Top Row - 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Total Emissions"
          value="1,25,847"
          unit="tCO₂e"
          change="-8.3% vs last year"
          changeType="negative"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
              <path d="M3 12L7 8L12 13L17 6L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
        />
        <StatsCard
          title="Emissions Intensity"
          value="3.24"
          unit="tCO₂e/$M"
          change="-5.2% vs last year"
          changeType="negative"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
              <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 21V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 21V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M13 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M17 21V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M21 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
        />
        <StatsCard
          title="Carbon Cost"
          value="$10.7M"
          change="-8.3% vs last year"
          changeType="negative"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
              <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M17 5C17 3.9 16.1 3 15 3C13.9 3 13 3.9 13 5C13 6.1 13.9 7 15 7C16.1 7 17 6.1 17 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 12C7 10.9 7.9 10 9 10C10.1 10 11 10.9 11 12C11 13.1 10.1 14 9 14C7.9 14 7 13.1 7 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 19C17 17.9 17.9 17 19 17C20.1 17 21 17.9 21 19C21 20.1 20.1 21 19 21C17.9 21 17 20.1 17 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <StatsCard
          title="Avoided Emissions"
          value="15,234"
          unit="tCO₂e"
          change="+23.4% vs last year"
          changeType="positive"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8C10 6 8 7 8 9C8 11 10 13 12 15C14 13 16 11 16 9C16 7 14 6 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>

      {/* Bottom Row - 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatsCard
          title="Scope 1"
          value="42,156"
          subtitle="Direct emissions"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
              <path d="M3 12L7 8L12 13L17 6L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
        />
        <StatsCard
          title="Scope 2"
          value="38,942"
          subtitle="Purchased energy"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <StatsCard
          title="Scope 3"
          value="44,749"
          subtitle="Value chain"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
          }
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EmissionsByScope />
        <EmissionsTrends />
      </div>

      {/* Additional Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EmissionsByRegion />
        <EnergyConsumptionMix />
      </div>

      {/* Target and Quality Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReductionTarget />
        <DataQualityScore />
      </div>
    </div>
  );
};

export default DashboardContent;

