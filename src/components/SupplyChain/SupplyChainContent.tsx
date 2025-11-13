'use client';

import React from 'react';
import SupplyChainStatsCards from './SupplyChainStatsCards';
import EmissionsByScope3Category from './EmissionsByScope3Category';
import CategoryDetails from './CategoryDetails';
import KeySuppliers from './KeySuppliers';

const SupplyChainContent: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Supply Chain Emissions</h1>
        <p className="text-gray-600">Scope 3 value chain emissions tracking and supplier engagement</p>
      </div>

      {/* Stats Cards */}
      <div className="mb-6">
        <SupplyChainStatsCards />
      </div>

      {/* Emissions by Scope 3 Category Chart */}
      <div className="mb-6">
        <EmissionsByScope3Category />
      </div>

      {/* Category Details Table */}
      <div className="mb-6">
        <CategoryDetails />
      </div>

      {/* Key Suppliers Table */}
      <KeySuppliers />
    </div>
  );
};

export default SupplyChainContent;

