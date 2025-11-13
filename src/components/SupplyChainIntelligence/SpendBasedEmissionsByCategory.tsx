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

const SpendBasedEmissionsByCategory: React.FC = () => {
  const data = [
    {
      category: 'Raw Materials',
      emissions: 25500,
      spend: 5800000,
    },
    {
      category: 'Manufacturing',
      emissions: 19500,
      spend: 5000000,
    },
    {
      category: 'Transportation',
      emissions: 7000,
      spend: 2200000,
    },
    {
      category: 'Services',
      emissions: 3000,
      spend: 1800000,
    },
    {
      category: 'Packaging',
      emissions: 1000,
      spend: 400000,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Spend-Based Emissions by Category</h2>
      <p className="text-sm text-gray-600 mb-6">Estimated Scope 3 emissions using spend data and emission factors</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="category"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            yAxisId="left"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 26000]}
            ticks={[0, 6500, 13000, 19500, 26000]}
            label={{ value: 'tCO2e', angle: -90, position: 'insideLeft', style: { fontSize: '12px', fill: '#6B7280' } }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 6000000]}
            ticks={[0, 1500000, 3000000, 4500000, 6000000]}
            label={{ value: 'Spend ($M)', angle: 90, position: 'insideRight', style: { fontSize: '12px', fill: '#6B7280' } }}
            tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: '6px',
            }}
            formatter={(value: number, name: string) => {
              if (name === 'emissions') {
                return [`${value.toLocaleString()} tCO2e`, 'Emissions (tCO2e)'];
              } else {
                return [`$${value.toLocaleString()}`, 'Spend ($)'];
              }
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="square"
          />
          <Bar
            yAxisId="left"
            dataKey="emissions"
            fill="#0D9488"
            name="Emissions (tCO2e)"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="spend"
            fill="#10B981"
            name="Spend ($)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendBasedEmissionsByCategory;

