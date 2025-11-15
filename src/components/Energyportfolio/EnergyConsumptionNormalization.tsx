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
  Area,
} from 'recharts';

const EnergyConsumptionNormalization: React.FC = () => {
  const data = [
    { month: 'Jan', actualElectricity: 165000, weatherNormalized: 158000, degreeDays: 750 },
    { month: 'Feb', actualElectricity: 155000, weatherNormalized: 150000, degreeDays: 680 },
    { month: 'Mar', actualElectricity: 140000, weatherNormalized: 138000, degreeDays: 520 },
    { month: 'Apr', actualElectricity: 120000, weatherNormalized: 125000, degreeDays: 280 },
    { month: 'May', actualElectricity: 110000, weatherNormalized: 115000, degreeDays: 120 },
    { month: 'Jun', actualElectricity: 125000, weatherNormalized: 130000, degreeDays: 50 },
    { month: 'Jul', actualElectricity: 145000, weatherNormalized: 148000, degreeDays: 30 },
    { month: 'Aug', actualElectricity: 150000, weatherNormalized: 152000, degreeDays: 40 },
    { month: 'Sep', actualElectricity: 130000, weatherNormalized: 132000, degreeDays: 100 },
    { month: 'Oct', actualElectricity: 125000, weatherNormalized: 128000, degreeDays: 250 },
    { month: 'Nov', actualElectricity: 140000, weatherNormalized: 142000, degreeDays: 450 },
    { month: 'Dec', actualElectricity: 160000, weatherNormalized: 155000, degreeDays: 720 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Header with title and degree days indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Energy Consumption & Normalization
          </h2>
          <p className="text-sm text-gray-600">
            Actual vs degree-day normalized consumption
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2V6M10 14V18M6 10H2M18 10H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6C8.34 6 7 7.34 7 9C7 10.66 8.34 12 10 12C11.66 12 13 10.66 13 9C13 7.34 11.66 6 10 6Z"
              fill="currentColor"
            />
          </svg>
          <span>Heating/Cooling Degree Days</span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full" style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
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
              yAxisId="left"
              stroke="#0D9488"
              style={{ fontSize: '12px' }}
              domain={[0, 180000]}
              ticks={[0, 45000, 90000, 135000, 180000]}
              label={{ value: 'KWh', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280' } }}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#9CA3AF"
              style={{ fontSize: '12px' }}
              domain={[0, 800]}
              ticks={[0, 200, 400, 600, 800]}
              label={{ value: 'Degree Days', angle: 90, position: 'insideRight', style: { textAnchor: 'middle', fill: '#6B7280' } }}
              tick={{ fill: '#6B7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
              }}
              formatter={(value: number, name: string) => {
                if (name === 'actualElectricity' || name === 'weatherNormalized') {
                  return [`${value.toLocaleString()} KWh`, name === 'actualElectricity' ? 'Actual Electricity' : 'Weather Normalized'];
                }
                return [`${value}`, 'Degree Days'];
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => {
                if (value === 'actualElectricity') return 'Actual Electricity';
                if (value === 'weatherNormalized') return 'Weather Normalized';
                return 'Degree Days';
              }}
            />
            {/* Degree Days Bar */}
            <Bar
              yAxisId="right"
              dataKey="degreeDays"
              fill="#D1D5DB"
              name="degreeDays"
              radius={[4, 4, 0, 0]}
            />
            {/* Actual Electricity Line with Area */}
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="actualElectricity"
              stroke="#0D9488"
              strokeWidth={2}
              fill="#0D9488"
              fillOpacity={0.3}
              name="actualElectricity"
              dot={{ fill: '#0D9488', r: 4 }}
            />
            {/* Weather Normalized Line */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="weatherNormalized"
              stroke="#10B981"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#10B981', r: 4 }}
              name="weatherNormalized"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Informational Box */}
      <div className="mt-6 bg-teal-50 border border-teal-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          Weather Normalization:
        </h3>
        <p className="text-sm text-gray-700">
          Degree-day normalization adjusts energy consumption to account for weather variations, enabling accurate year-over-year comparisons. Current analysis shows actual consumption tracking 5.2% below normalized baseline.
        </p>
      </div>
    </div>
  );
};

export default EnergyConsumptionNormalization;

