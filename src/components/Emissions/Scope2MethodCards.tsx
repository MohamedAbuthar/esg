'use client';

import React from 'react';

const Scope2MethodCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 relative">
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Standard
          </span>
        </div>
        <div className="pr-20">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Location-Based Method</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl font-bold text-gray-900">35,847</span>
            <span className="text-sm font-medium text-gray-600">tCO₂e</span>
          </div>
          <p className="text-sm text-gray-600">Based on average grid emission factors for the location</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 relative">
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            With RECs
          </span>
        </div>
        <div className="pr-20">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Market-Based Method</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl font-bold text-gray-900">28,942</span>
            <span className="text-sm font-medium text-gray-600">tCO₂e</span>
          </div>
          <p className="text-sm text-gray-600">Accounts for renewable energy certificates and PPAs</p>
        </div>
      </div>
    </div>
  );
};

export default Scope2MethodCards;

