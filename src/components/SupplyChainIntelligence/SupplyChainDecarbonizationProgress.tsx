'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const SupplyChainDecarbonizationProgress: React.FC = () => {
  const data = [
    { year: 2020, businessAsUsual: 65000, actualEmissions: 65000, targetPathway: 64000 },
    { year: 2021, businessAsUsual: 66000, actualEmissions: 63000, targetPathway: 62000 },
    { year: 2022, businessAsUsual: 67000, actualEmissions: 61000, targetPathway: 59000 },
    { year: 2023, businessAsUsual: 68900, actualEmissions: 58200, targetPathway: 55250 },
    { year: 2024, businessAsUsual: 70000, actualEmissions: 55000, targetPathway: 50000 },
    { year: 2025, businessAsUsual: 72000, actualEmissions: 52000, targetPathway: 45000 },
    { year: 2030, businessAsUsual: 79000, actualEmissions: 45000, targetPathway: 32000 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm text-gray-700" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Supply Chain Decarbonization Progress</h2>
        <p className="text-sm text-gray-600">Track supplier emissions reduction vs. targets.</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="year"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            ticks={[2020, 2021, 2022, 2023, 2024, 2025, 2030]}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 80000]}
            ticks={[0, 20000, 40000, 60000, 80000]}
            label={{ value: 'Emissions (tCO₂e)', angle: -90, position: 'insideLeft', style: { fontSize: '12px', fill: '#6B7280' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
          <Line
            type="monotone"
            dataKey="businessAsUsual"
            stroke="#9CA3AF"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: 'transparent', r: 4, strokeWidth: 2, stroke: '#9CA3AF' }}
            name="Business as Usual"
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="actualEmissions"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6', r: 4 }}
            name="Actual Emissions"
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="targetPathway"
            stroke="#EF4444"
            strokeWidth={2}
            strokeDasharray="2 2"
            dot={{ fill: '#EF4444', r: 4 }}
            name="Target Pathway"
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SupplyChainDecarbonizationProgress;

