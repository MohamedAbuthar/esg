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

const EmissionsByScope3Category: React.FC = () => {
  const data = [
    { category: 'Cat 1: Purchased Goods', emissions: 19200 },
    { category: 'Cat 2: Capital Goods', emissions: 8750 },
    { category: 'Cat 3: Fuel & Energy', emissions: 4500 },
    { category: 'Cat 4: Upstream Transport', emissions: 5250 },
    { category: 'Cat 5: Waste', emissions: 2000 },
    { category: 'Cat 6: Business Travel', emissions: 3500 },
    { category: 'Cat 7: Employee Commute', emissions: 2500 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Emissions by Scope 3 Category</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
          <XAxis
            type="number"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 20000]}
            ticks={[0, 5000, 10000, 15000, 20000]}
            label={{ value: 'Emissions (tCO₂e)', position: 'insideBottom', offset: -5, style: { fontSize: '12px', fill: '#6B7280' } }}
          />
          <YAxis
            type="category"
            dataKey="category"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            width={140}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: '6px',
            }}
            formatter={(value: number) => [`${value.toLocaleString()} tCO₂e`, 'Emissions']}
          />
          <Bar
            dataKey="emissions"
            fill="#F97316"
            name="Emissions (tCO₂e)"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsByScope3Category;

