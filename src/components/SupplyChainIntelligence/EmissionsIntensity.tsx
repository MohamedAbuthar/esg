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

const EmissionsIntensity: React.FC = () => {
  const data = [
    {
      category: 'Packaging',
      intensity: 0,
    },
    {
      category: 'Services',
      intensity: 0,
    },
    {
      category: 'Transportation',
      intensity: 0,
    },
    {
      category: 'Manufacturing',
      intensity: 0,
    },
    {
      category: 'Raw Materials',
      intensity: 0,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Emissions Intensity</h2>
      <p className="text-sm text-gray-600 mb-6">kg CO2e per dollar spent by category</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false} vertical={true} />
          <XAxis
            type="number"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 1]}
            ticks={[0, 0.25, 0.5, 0.75, 1]}
            label={{ value: 'kg CO2e / $', position: 'insideBottom', offset: -5, style: { fontSize: '12px', fill: '#6B7280' } }}
          />
          <YAxis
            type="category"
            dataKey="category"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            width={110}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: '6px',
            }}
            formatter={(value: number) => [`${value} kg CO2e / $`, 'Intensity']}
          />
          <Bar
            dataKey="intensity"
            fill="#0D9488"
            name="Intensity"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsIntensity;

