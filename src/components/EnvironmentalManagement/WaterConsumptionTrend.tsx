'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const WaterConsumptionTrend: React.FC = () => {
  const data = [
    { month: 'Jan', recycled: 2800, consumption: 25000 },
    { month: 'Feb', recycled: 3200, consumption: 24800 },
    { month: 'Mar', recycled: 3800, consumption: 25200 },
    { month: 'Apr', recycled: 3600, consumption: 24500 },
    { month: 'May', recycled: 3800, consumption: 23800 },
    { month: 'Jun', recycled: 3900, consumption: 22800 },
  ];

  // Calculate non-recycled consumption
  const dataWithNonRecycled = data.map((item) => ({
    ...item,
    nonRecycled: item.consumption - item.recycled,
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Water Consumption Trend
        </h2>
      </div>

      {/* Chart */}
      <div className="w-full" style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={dataWithNonRecycled}
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
              domain={[0, 26000]}
              ticks={[0, 6500, 13000, 19500, 26000]}
              label={{ value: 'm³', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280' } }}
              tick={{ fill: '#6B7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
              }}
              formatter={(value: number, name: string) => {
                if (name === 'recycled') {
                  return [`${value.toLocaleString()} m³`, 'Recycled (m³)'];
                }
                if (name === 'nonRecycled') {
                  return [`${value.toLocaleString()} m³`, 'Consumption (m³)'];
                }
                return [`${value.toLocaleString()} m³`, name];
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => {
                if (value === 'recycled') return 'Recycled (m³)';
                if (value === 'nonRecycled') return 'Consumption (m³)';
                return value;
              }}
              iconType="diamond"
            />
            {/* Recycled Water Area (bottom, green) */}
            <Area
              type="monotone"
              dataKey="recycled"
              stackId="1"
              stroke="#10B981"
              strokeWidth={2}
              fill="#10B981"
              fillOpacity={0.6}
              name="recycled"
              dot={{ fill: '#10B981', r: 4 }}
            />
            {/* Non-Recycled Consumption Area (top, blue) */}
            <Area
              type="monotone"
              dataKey="nonRecycled"
              stackId="1"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="#3B82F6"
              fillOpacity={0.6}
              name="nonRecycled"
              dot={{ fill: '#3B82F6', r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WaterConsumptionTrend;

