'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const EmissionsByFacilityType: React.FC = () => {
  const data = [
    { name: 'Production', value: 48, color: '#0D9488' },
    { name: 'Office', value: 36, color: '#F97316' },
    { name: 'Warehouse', value: 16, color: '#10B981' },
  ];

  const RADIAN = Math.PI / 180;
  const renderLabel = (entry: any) => {
    const radius = entry.innerRadius + (entry.outerRadius - entry.innerRadius) * 0.5;
    const x = entry.cx + radius * Math.cos(-entry.midAngle * RADIAN);
    const y = entry.cy + radius * Math.sin(-entry.midAngle * RADIAN);
    
    // Position labels outside the pie
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

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-gray-900 mb-1">{payload[0].name}</p>
          <p className="text-sm text-gray-700" style={{ color: payload[0].payload.fill }}>
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Emissions by Facility Type</h2>
        <p className="text-sm text-gray-600">Breakdown by operational category</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
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
  );
};

export default EmissionsByFacilityType;

