'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const EmissionsByRegion: React.FC = () => {
  const data = [
    { region: 'North America', emissions: 90000 },
    { region: 'Europe', emissions: 27000 },
    { region: 'Asia', emissions: 8000 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-gray-900 mb-1">{payload[0].payload.region}</p>
          <p className="text-sm text-gray-700" style={{ color: '#0D9488' }}>
            Emissions: {payload[0].value.toLocaleString()} tCO₂e
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Emissions by Region</h2>
        <p className="text-sm text-gray-600">Total tCO₂e per geographic region</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="region"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#374151' }}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 100000]}
            ticks={[0, 25000, 50000, 75000, 100000]}
            tick={{ fill: '#374151' }}
            label={{ value: 'Total tCO₂e', angle: -90, position: 'insideLeft', style: { fontSize: '12px', fill: '#6B7280' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="emissions" fill="#0D9488" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsByRegion;

