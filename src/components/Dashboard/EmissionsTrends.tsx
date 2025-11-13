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

const EmissionsTrends: React.FC = () => {
  const data = [
    { month: 'Jan', scope1: 3500, scope2: 3200, scope3: 3800 },
    { month: 'Feb', scope1: 3400, scope2: 3100, scope3: 3700 },
    { month: 'Mar', scope1: 3700, scope2: 3400, scope3: 3900 },
    { month: 'Apr', scope1: 3600, scope2: 3300, scope3: 3800 },
    { month: 'May', scope1: 3500, scope2: 3200, scope3: 3750 },
    { month: 'Jun', scope1: 3400, scope2: 3100, scope3: 3700 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Emissions Trends (6 Months)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="month"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 4000]}
            ticks={[0, 1000, 2000, 3000, 4000]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: '6px',
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
          <Line
            type="monotone"
            dataKey="scope1"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6', r: 4 }}
            name="Scope 1"
          />
          <Line
            type="monotone"
            dataKey="scope2"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ fill: '#10B981', r: 4 }}
            name="Scope 2"
          />
          <Line
            type="monotone"
            dataKey="scope3"
            stroke="#F97316"
            strokeWidth={2}
            dot={{ fill: '#F97316', r: 4 }}
            name="Scope 3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsTrends;

