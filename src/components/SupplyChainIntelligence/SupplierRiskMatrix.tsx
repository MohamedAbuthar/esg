'use client';

import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const SupplierRiskMatrix: React.FC = () => {
  const data = [
    { spend: 0.75, riskScore: 58, color: '#F97316' }, // Orange
    { spend: 1.7, riskScore: 72, color: '#EF4444' }, // Red
    { spend: 2.5, riskScore: 36, color: '#1E40AF' }, // Dark Blue
    { spend: 3.0, riskScore: 29, color: '#3B82F6' }, // Blue
    { spend: 4.2, riskScore: 22, color: '#3B82F6' }, // Blue
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-gray-900 mb-1">
            Annual Spend: ${data.spend.toFixed(2)}M
          </p>
          <p className="text-sm font-medium text-gray-900">
            Risk Score: {data.riskScore}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Supplier Risk Matrix</h2>
        <p className="text-sm text-gray-600">Multi-factor risk assessment combining emissions, engagement, and compliance.</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            type="number"
            dataKey="spend"
            name="Annual Spend"
            unit=" $M"
            domain={[0, 6]}
            ticks={[0, 1.5, 3.0, 4.5, 6.0]}
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            label={{ value: 'Annual Spend ($M)', position: 'insideBottom', offset: -5, style: { fontSize: '12px', fill: '#6B7280' } }}
          />
          <YAxis
            type="number"
            dataKey="riskScore"
            name="Risk Score"
            domain={[0, 80]}
            ticks={[0, 20, 40, 60, 80]}
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            label={{ value: 'Risk Score', angle: -90, position: 'insideLeft', style: { fontSize: '12px', fill: '#6B7280' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
            formatter={() => 'Suppliers'}
          />
          <Scatter
            name="Suppliers"
            data={data}
            fill="#3B82F6"
            shape={(props: any) => {
              const { cx, cy, payload } = props;
              const color = payload?.color || '#3B82F6';
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={6}
                  fill={color}
                  stroke="#fff"
                  strokeWidth={2}
                />
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SupplierRiskMatrix;

