'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
} from '../ui/chart';

const chartConfig = {
  lostTimeIncidents: {
    label: 'Lost Time Incidents',
    color: '#EF4444',
  },
  ltifr: {
    label: 'LTIFR',
    color: '#14B8A6',
  },
  nearMisses: {
    label: 'Near Misses',
    color: '#F97316',
  },
} as const;

const EmployeeSafetyHealthChart: React.FC = () => {
  const data = [
    { month: 'Jan', lostTimeIncidents: 3.0, ltifr: 0.2, nearMisses: 12.0 },
    { month: 'Feb', lostTimeIncidents: 2.0, ltifr: 0.2, nearMisses: 15.0 },
    { month: 'Mar', lostTimeIncidents: 4.0, ltifr: 0.4, nearMisses: 17.0 },
    { month: 'Apr', lostTimeIncidents: 2.0, ltifr: 0.4, nearMisses: 14.0 },
    { month: 'May', lostTimeIncidents: 3.0, ltifr: 0.4, nearMisses: 16.0 },
    { month: 'Jun', lostTimeIncidents: 5.0, ltifr: 0.5, nearMisses: 20.0 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Employee Safety & Health
        </h2>
      </div>

      {/* Chart */}
      <div className="w-full" style={{ height: '400px' }}>
        <ChartContainer config={chartConfig} className="h-full w-full !aspect-auto" id="employee-safety-health">
          <LineChart
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
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
              domain={[0, 8]}
              ticks={[0, 2, 4, 6, 8]}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
              domain={[0, 20]}
              ticks={[0, 5, 10, 15, 20]}
              tick={{ fill: '#6B7280' }}
            />
            <ChartTooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                return (
                  <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-3 text-xs">
                    <p className="font-medium text-gray-900 mb-2">
                      {payload[0].payload.month}
                    </p>
                    {payload.map((entry, index) => (
                      <div key={index} className="flex justify-between gap-4 mb-1">
                        <span className="text-gray-600 flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                          />
                          {entry.dataKey === 'lostTimeIncidents'
                            ? 'Lost Time Incidents'
                            : entry.dataKey === 'ltifr'
                            ? 'LTIFR'
                            : 'Near Misses'}
                          :
                        </span>
                        <span className="font-medium text-gray-900">
                          {typeof entry.value === 'number'
                            ? entry.value.toFixed(1)
                            : entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
              formatter={(value) => {
                if (value === 'lostTimeIncidents') return 'Lost Time Incidents';
                if (value === 'ltifr') return 'LTIFR';
                if (value === 'nearMisses') return 'Near Misses';
                return value;
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="lostTimeIncidents"
              stroke="#EF4444"
              strokeWidth={2}
              dot={{ fill: '#EF4444', r: 4 }}
              name="lostTimeIncidents"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="ltifr"
              stroke="#14B8A6"
              strokeWidth={2}
              dot={{ fill: '#14B8A6', r: 4 }}
              name="ltifr"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="nearMisses"
              stroke="#F97316"
              strokeWidth={2}
              dot={{ fill: '#F97316', r: 4 }}
              name="nearMisses"
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default EmployeeSafetyHealthChart;

