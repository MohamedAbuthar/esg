'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const EmissionsByScope: React.FC = () => {
  const data = [
    { name: 'Scope 1', value: 42156, percentage: 33.5, color: '#0D9488' },
    { name: 'Scope 2', value: 38942, percentage: 30.9, color: '#10B981' },
    { name: 'Scope 3', value: 44749, percentage: 35.6, color: '#F97316' },
  ];

  const COLORS = ['#0D9488', '#10B981', '#F97316'];

  const RADIAN = Math.PI / 180;
  const renderLabel = (entry: any) => {
    const radius = entry.innerRadius + (entry.outerRadius - entry.innerRadius) * 0.5;
    const x = entry.cx + radius * Math.cos(-entry.midAngle * RADIAN);
    const y = entry.cy + radius * Math.sin(-entry.midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > entry.cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="600"
      >
        {`${entry.name}: ${entry.percentage}%`}
      </text>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Emissions by Scope</h2>
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-sm font-medium text-gray-900">{item.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {item.value.toLocaleString()} tCO2e
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmissionsByScope;

