'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
} from '../ui/chart';

const boardCompositionConfig = {
  independent: {
    label: 'Independent Directors',
    color: '#14B8A6',
  },
  executive: {
    label: 'Executive Directors',
    color: '#10B981',
  },
  nonExecutive: {
    label: 'Non-Executive',
    color: '#F97316',
  },
} as const;

const boardDiversityConfig = {
  diversity: {
    label: 'Diversity Score',
    color: '#14B8A6',
  },
} as const;

const BoardCompositionCharts: React.FC = () => {
  const boardCompositionData = [
    { name: 'Independent Directors', value: 73, color: '#14B8A6' },
    { name: 'Executive Directors', value: 18, color: '#10B981' },
    { name: 'Non-Executive', value: 9, color: '#F97316' },
  ];

  const boardDiversityData = [
    { category: 'Gender Diversity', value: 62 },
    { category: 'Age Diversity', value: 50 },
    { category: 'Ethnic Diversity', value: 32 },
    { category: 'Skills Diversity', value: 82 },
    { category: 'Industry Experience', value: 72 },
    { category: 'International Experience', value: 62 },
  ];

  const RADIAN = Math.PI / 180;
  const renderPieLabel = (entry: any) => {
    const labelRadius = entry.outerRadius + 20;
    const labelX = entry.cx + labelRadius * Math.cos(-entry.midAngle * RADIAN);
    const labelY = entry.cy + labelRadius * Math.sin(-entry.midAngle * RADIAN);
    
    return (
      <text
        x={labelX}
        y={labelY}
        fill={entry.color}
        textAnchor={labelX > entry.cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="600"
      >
        {`${entry.name} ${entry.value}%`}
      </text>
    );
  };

  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-gray-900 mb-1">
            {payload[0].name}
          </p>
          <p
            className="text-sm text-gray-700"
            style={{ color: payload[0].payload.fill }}
          >
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Board Composition Pie Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Board Composition
        </h2>
        <div className="w-full" style={{ height: '400px' }}>
          <ChartContainer config={boardCompositionConfig} className="h-full w-full !aspect-auto" id="board-composition">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={boardCompositionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderPieLabel}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {boardCompositionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Board Diversity Profile Radar Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Board Diversity Profile
        </h2>
        <div className="w-full" style={{ height: '400px' }}>
          <ChartContainer config={boardDiversityConfig} className="h-full w-full !aspect-auto" id="board-diversity">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={boardDiversityData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  tickLine={{ stroke: '#6B7280' }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: '#6B7280', fontSize: 11 }}
                  tickCount={5}
                />
                <Radar
                  name="Diversity Score"
                  dataKey="value"
                  stroke="#14B8A6"
                  fill="#14B8A6"
                  fillOpacity={0.6}
                  strokeWidth={2}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            {payload[0].payload.category}
                          </p>
                          <p className="text-sm text-gray-700">
                            {payload[0].value}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default BoardCompositionCharts;

