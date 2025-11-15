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

const FuelMixAnalysis: React.FC = () => {
  const data = [
    { month: 'Jan', electricity: 165000, naturalGas: 92000 },
    { month: 'Feb', electricity: 155000, naturalGas: 88000 },
    { month: 'Mar', electricity: 145000, naturalGas: 75000 },
    { month: 'Apr', electricity: 120000, naturalGas: 45000 },
    { month: 'May', electricity: 110000, naturalGas: 28000 },
    { month: 'Jun', electricity: 140000, naturalGas: 15000 },
    { month: 'Jul', electricity: 158000, naturalGas: 12000 },
    { month: 'Aug', electricity: 162000, naturalGas: 14000 },
    { month: 'Sep', electricity: 135000, naturalGas: 20000 },
    { month: 'Oct', electricity: 125000, naturalGas: 35000 },
    { month: 'Nov', electricity: 140000, naturalGas: 60000 },
    { month: 'Dec', electricity: 160000, naturalGas: 85000 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Fuel Mix Analysis
        </h2>
        <p className="text-sm text-gray-600">
          Monthly electricity and natural gas consumption patterns
        </p>
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
              domain={[0, 180000]}
              ticks={[0, 45000, 90000, 135000, 180000]}
              label={{ value: 'Consumption', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280' } }}
              tick={{ fill: '#6B7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
              }}
              formatter={(value: number, name: string) => {
                if (name === 'electricity') {
                  return [`${value.toLocaleString()} kWh`, 'Electricity (kWh)'];
                }
                return [`${value.toLocaleString()} m³`, 'Natural Gas (m³)'];
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => {
                if (value === 'electricity') return 'Electricity (kWh)';
                return 'Natural Gas (m³)';
              }}
            />
            {/* Electricity Bar */}
            <Bar
              dataKey="electricity"
              fill="#0D9488"
              name="electricity"
              radius={[4, 4, 0, 0]}
            />
            {/* Natural Gas Bar */}
            <Bar
              dataKey="naturalGas"
              fill="#F97316"
              name="naturalGas"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FuelMixAnalysis;

