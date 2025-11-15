'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const WasteByType: React.FC = () => {
  const data = [
    { name: 'Recyclables', value: 45.8, color: '#10B981' },
    { name: 'Organic/Compost', value: 26.7, color: '#9333EA' },
    { name: 'Landfill', value: 17.8, color: '#EF4444' },
    { name: 'Incineration', value: 9.7, color: '#F97316' },
  ];

  const RADIAN = Math.PI / 180;
  const renderLabel = (entry: any) => {
    const labelRadius = entry.outerRadius + 25;
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

  const CustomTooltip = ({ active, payload }: any) => {
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
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Waste by Type
        </h2>
      </div>

      {/* Chart */}
      <div className="w-full" style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WasteByType;

