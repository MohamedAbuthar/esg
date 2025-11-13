'use client';

import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const EnergyConsumptionMix: React.FC = () => {
  const data = [
    {
      source: 'Electricity',
      emissions: 18000,
      renewable: 25,
    },
    {
      source: 'Natural Gas',
      emissions: 18500,
      renewable: 0,
    },
    {
      source: 'Diesel',
      emissions: 23500,
      renewable: 0,
    },
    {
      source: 'Solar (Self-gen)',
      emissions: 0,
      renewable: 100,
    },
    {
      source: 'Biomass',
      emissions: 1000,
      renewable: 90,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Energy Consumption Mix</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="source"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis
            yAxisId="left"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 24000]}
            ticks={[0, 6000, 12000, 18000, 24000]}
            label={{ value: 'Emissions (tCO₂e)', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9333EA"
            style={{ fontSize: '12px' }}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            label={{ value: 'Renewable %', angle: 90, position: 'insideRight' }}
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
            iconType="square"
          />
          <Bar
            yAxisId="left"
            dataKey="emissions"
            fill="#0D9488"
            name="Emissions (tCO₂e)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="renewable"
            stroke="#9333EA"
            strokeWidth={2}
            dot={{ fill: '#9333EA', r: 4 }}
            name="Renewable %"
          />
        </ComposedChart>
      </ResponsiveContainer>
      
      {/* Summary Boxes */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm font-medium text-gray-600 mb-1">Total Energy</p>
          <p className="text-xl font-bold text-gray-900">81,658</p>
          <p className="text-xs text-gray-500 mt-1">Mixed units</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm font-medium text-gray-600 mb-1">Renewable Energy</p>
          <p className="text-xl font-bold text-gray-900">24%</p>
          <p className="text-xs text-gray-500 mt-1">of total consumption</p>
        </div>
      </div>
    </div>
  );
};

export default EnergyConsumptionMix;

