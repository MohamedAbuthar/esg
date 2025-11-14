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

const EmissionsTrajectory: React.FC = () => {
  const data = [
    { year: 2020, actualEmissions: 190000, scienceBasedPathway: 190000 },
    { year: 2021, actualEmissions: 185000, scienceBasedPathway: 175000 },
    { year: 2022, actualEmissions: 170000, scienceBasedPathway: 160000 },
    { year: 2023, actualEmissions: 155000, scienceBasedPathway: 140000 },
    { year: 2024, actualEmissions: 125000, scienceBasedPathway: 115000 },
    { year: 2025, actualEmissions: 110000, scienceBasedPathway: 105000 },
    { year: 2030, actualEmissions: 90000, scienceBasedPathway: 95000 },
    { year: 2050, actualEmissions: 20000, scienceBasedPathway: 0 },
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
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Emissions Trajectory</h2>
        <p className="text-sm text-gray-600">Actual emissions vs. net zero pathway</p>
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
            ticks={[2020, 2021, 2022, 2023, 2024, 2025, 2030, 2050]}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 200000]}
            ticks={[0, 50000, 100000, 150000, 200000]}
            label={{ value: 'Emissions (tCO₂e)', angle: -90, position: 'insideLeft', style: { fontSize: '12px', fill: '#6B7280' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
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
            dataKey="scienceBasedPathway"
            stroke="#10B981"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#10B981', r: 4 }}
            name="Science-Based Pathway"
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsTrajectory;

