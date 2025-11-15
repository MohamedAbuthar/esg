'use client';

import React, { useState } from 'react';
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
import { Button } from '../ui/button';

const IntervalData: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('2024-06-15');

  // Generate data for 24 hours matching the image pattern
  const data = [
    { time: '00:00', power: 275 },
    { time: '01:00', power: 270 },
    { time: '02:00', power: 260 },
    { time: '03:00', power: 250 },
    { time: '04:00', power: 255 },
    { time: '05:00', power: 265 },
    { time: '06:00', power: 280 },
    { time: '07:00', power: 380 },
    { time: '08:00', power: 520 },
    { time: '09:00', power: 650 },
    { time: '10:00', power: 780 },
    { time: '11:00', power: 860 },
    { time: '12:00', power: 892 },
    { time: '13:00', power: 840 },
    { time: '14:00', power: 720 },
    { time: '15:00', power: 680 },
    { time: '16:00', power: 600 },
    { time: '17:00', power: 480 },
    { time: '18:00', power: 420 },
    { time: '19:00', power: 350 },
    { time: '20:00', power: 320 },
    { time: '21:00', power: 300 },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div>
      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              15-Minute Interval Data
            </h2>
            <p className="text-sm text-gray-600">
              Real-time power consumption vs baseline - {formatDate(selectedDate)}
            </p>
          </div>
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              style={{ zIndex: 1 }}
            />
            <Button
              variant="outline"
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2 pointer-events-none"
              asChild={false}
            >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2H4C3.45 2 3 2.45 3 3V13C3 13.55 3.45 14 4 14H12C12.55 14 13 13.55 13 13V3C13 2.45 12.55 2 12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 1V3M5 1V3M3 6H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Select Date
            </Button>
          </div>
        </div>

        {/* Chart with Cards Inside */}
        <div className="w-full relative" style={{ height: '500px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 20, bottom: 120 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="time"
                stroke="#6B7280"
                style={{ fontSize: '12px' }}
                tick={{ fill: '#6B7280' }}
                ticks={['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']}
              />
              <YAxis
                stroke="#6B7280"
                style={{ fontSize: '12px' }}
                domain={[0, 1000]}
                ticks={[0, 250, 500, 750, 1000]}
                label={{ value: 'Power (kW)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280' } }}
                tick={{ fill: '#6B7280' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px',
                }}
                formatter={(value: number) => [`${value} kW`, 'Current Power']}
              />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={() => 'Current Power'}
              />
              <Area
                type="monotone"
                dataKey="power"
                stroke="#0D9488"
                strokeWidth={2}
                fill="#0D9488"
                fillOpacity={0.3}
                name="Current Power"
              />
            </AreaChart>
          </ResponsiveContainer>
          
          {/* KPI Cards positioned inside chart at bottom */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-4">
            {/* Peak Demand Card */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <p className="text-xs font-medium text-gray-600 mb-1">Peak Demand</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">892 kW</h3>
              <p className="text-xs text-gray-500">at 12:00 PM</p>
            </div>

            {/* Off-Peak Avg Card */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <p className="text-xs font-medium text-gray-600 mb-1">Off-Peak Avg</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">278 kW</h3>
              <p className="text-xs text-gray-500">00:00 - 06:00</p>
            </div>

            {/* Load Factor Card */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <p className="text-xs font-medium text-gray-600 mb-1">Load Factor</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">68.5%</h3>
              <p className="text-xs text-green-600 font-medium">Good efficiency</p>
            </div>

            {/* vs Baseline Card */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <p className="text-xs font-medium text-gray-600 mb-1">vs Baseline</p>
              <h3 className="text-xl font-bold text-green-600 mb-1">-4.8%</h3>
              <p className="text-xs text-green-600 font-medium">Below target</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntervalData;

