'use client';

import React from 'react';
import { Card, CardContent } from '../ui/card';

const DataQualityImprovement: React.FC = () => {
  return (
    <div className="space-y-6 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Data Quality Improvement</h2>
        <p className="text-gray-600">Transition from spend-based to primary data</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Primary Data</p>
            <div className="flex items-baseline gap-1 mb-2">
              <h3 className="text-3xl font-bold text-green-600">40</h3>
              <span className="text-2xl font-bold text-green-600">%</span>
            </div>
            <p className="text-sm text-gray-500">2 suppliers</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Spend-Based</p>
            <div className="flex items-baseline gap-1 mb-2">
              <h3 className="text-3xl font-bold text-orange-600">40</h3>
              <span className="text-2xl font-bold text-orange-600">%</span>
            </div>
            <p className="text-sm text-gray-500">2 suppliers</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Industry Avg</p>
            <div className="flex items-baseline gap-1 mb-2">
              <h3 className="text-3xl font-bold text-gray-900">20</h3>
              <span className="text-2xl font-bold text-gray-900">%</span>
            </div>
            <p className="text-sm text-gray-500">1 supplier</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataQualityImprovement;

