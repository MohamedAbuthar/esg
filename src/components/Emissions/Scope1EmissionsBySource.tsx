'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Scope1EmissionsBySource: React.FC = () => {
  const data = [
    { source: 'Natural Gas', emissions: 19000 },
    { source: 'Fleet Vehicles', emissions: 12000 },
    { source: 'Refrigerants', emissions: 9000 },
    { source: 'Diesel Generators', emissions: 2500 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Scope 1 Emissions by Source</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="source"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 20000]}
            ticks={[0, 5000, 10000, 15000, 20000]}
            label={{ value: 'Emissions (tCO₂e)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: '6px',
            }}
            formatter={(value: number) => [`${value.toLocaleString()} tCO₂e`, 'Emissions']}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="square"
          />
          <Bar
            dataKey="emissions"
            fill="#3B82F6"
            name="Emissions (tCO₂e)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Scope1EmissionsBySource;

