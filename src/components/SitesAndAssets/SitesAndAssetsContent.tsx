'use client';

import React from 'react';
import SitesAndAssetsStats from './SitesAndAssetsStats';
import GlobalPortfolio from './GlobalPortfolio';
import EmissionsByRegion from './EmissionsByRegion';
import EmissionsByFacilityType from './EmissionsByFacilityType';
import FacilityDetails from './FacilityDetails';

const SitesAndAssetsContent: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sites & Assets</h1>
        <p className="text-gray-600">Portfolio overview and facility-level emissions tracking</p>
      </div>

      {/* Stats Cards */}
      <div className="mb-6">
        <SitesAndAssetsStats />
      </div>

      {/* Global Portfolio */}
      <div className="mb-6">
        <GlobalPortfolio />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EmissionsByRegion />
        <EmissionsByFacilityType />
      </div>

      {/* Facility Details */}
      <FacilityDetails />
    </div>
  );
};

export default SitesAndAssetsContent;

