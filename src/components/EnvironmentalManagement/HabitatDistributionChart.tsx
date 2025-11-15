'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
} from '../ui/chart';

const chartConfig = {
  area: {
    label: 'Area (hectares)',
    color: '#0D9488',
  },
  species: {
    label: 'Species Count',
    color: '#10B981',
  },
} as const;

const HabitatDistributionChart: React.FC = () => {
  const data = [
    {
      habitat: 'Grassland',
      area: 55,
      species: 18,
    },
    {
      habitat: 'Wetland',
      area: 45,
      species: 10,
    },
    {
      habitat: 'Forest',
      area: 38,
      species: 24,
    },
    {
      habitat: 'Garden',
      area: 8,
      species: 7,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Habitat Distribution
        </h2>
      </div>

      {/* Chart */}
      <div className="w-full" style={{ height: '400px' }}>
        <ChartContainer config={chartConfig} className="h-full w-full !aspect-auto" id="habitat-distribution">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="habitat"
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis
              yAxisId="left"
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
              domain={[0, 60]}
              ticks={[0, 15, 30, 45, 60]}
              label={{
                value: 'Area (hectares)',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#6B7280', fontSize: '12px' },
              }}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
              domain={[0, 24]}
              ticks={[0, 6, 12, 18, 24]}
              label={{
                value: 'Species Count',
                angle: 90,
                position: 'insideRight',
                style: { textAnchor: 'middle', fill: '#6B7280', fontSize: '12px' },
              }}
              tick={{ fill: '#6B7280' }}
            />
            <ChartTooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                return (
                  <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-3 text-xs">
                    <p className="font-medium text-gray-900 mb-2">
                      {payload[0].payload.habitat}
                    </p>
                    {payload.map((entry, index) => (
                      <div key={index} className="flex justify-between gap-4 mb-1">
                        <span className="text-gray-600">
                          {entry.dataKey === 'area' ? 'Area (hectares)' : 'Species Count'}:
                        </span>
                        <span className="font-medium text-gray-900">
                          {entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="square"
              formatter={(value) => {
                if (value === 'area') return 'Area (hectares)';
                if (value === 'species') return 'Species Count';
                return value;
              }}
            />
            <Bar
              yAxisId="left"
              dataKey="area"
              fill="#0D9488"
              name="area"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="species"
              fill="#10B981"
              name="species"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default HabitatDistributionChart;

