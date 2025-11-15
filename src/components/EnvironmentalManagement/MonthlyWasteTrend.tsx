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

const MonthlyWasteTrend: React.FC = () => {
  const data = [
    { month: 'Jan', generated: 155, recycled: 70, diverted: 110 },
    { month: 'Feb', generated: 150, recycled: 75, diverted: 115 },
    { month: 'Mar', generated: 160, recycled: 78, diverted: 120 },
    { month: 'Apr', generated: 158, recycled: 72, diverted: 112 },
    { month: 'May', generated: 155, recycled: 75, diverted: 118 },
    { month: 'Jun', generated: 150, recycled: 78, diverted: 120 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Monthly Waste Trend
        </h2>
      </div>

      {/* Chart */}
      <div className="w-full" style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="month"
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
              domain={[0, 160]}
              ticks={[0, 40, 80, 120, 160]}
              label={{
                value: 'tons',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#6B7280' },
              }}
              tick={{ fill: '#6B7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
              }}
              formatter={(value: number, name: string) => {
                if (name === 'generated') return [`${value} tons`, 'Generated (tons)'];
                if (name === 'recycled') return [`${value} tons`, 'Recycled (tons)'];
                if (name === 'diverted') return [`${value} tons`, 'Diverted (tons)'];
                return [`${value} tons`, name];
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => {
                if (value === 'generated') return 'Generated (tons)';
                if (value === 'recycled') return 'Recycled (tons)';
                if (value === 'diverted') return 'Diverted (tons)';
                return value;
              }}
            />
            {/* Generated Bar (Blue) */}
            <Bar
              dataKey="generated"
              fill="#3B82F6"
              name="generated"
              radius={[4, 4, 0, 0]}
            />
            {/* Recycled Bar (Green) */}
            <Bar
              dataKey="recycled"
              fill="#10B981"
              name="recycled"
              radius={[4, 4, 0, 0]}
            />
            {/* Diverted Bar (Orange) */}
            <Bar
              dataKey="diverted"
              fill="#F97316"
              name="diverted"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyWasteTrend;

