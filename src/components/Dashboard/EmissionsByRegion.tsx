'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const EmissionsByRegion: React.FC = () => {
  const data = [
    {
      region: 'North America',
      scope1: 28000,
      scope2: 22000,
      scope3: 18590,
    },
    {
      region: 'Europe',
      scope1: 8000,
      scope2: 12000,
      scope3: 8110,
    },
    {
      region: 'Asia',
      scope1: 6000,
      scope2: 4000,
      scope3: 19147,
    },
  ];

  const summaryData = [
    { region: 'North America', sites: 3, emissions: 68590, intensity: 2.89 },
    { region: 'Europe', sites: 2, emissions: 28110, intensity: 3.12 },
    { region: 'Asia', sites: 1, emissions: 29147, intensity: 4.21 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Emissions by Region</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="region"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            domain={[0, 80000]}
            ticks={[0, 20000, 40000, 60000, 80000]}
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
          <Bar dataKey="scope1" stackId="a" fill="#0D9488" name="Scope 1" />
          <Bar dataKey="scope2" stackId="a" fill="#10B981" name="Scope 2" />
          <Bar dataKey="scope3" stackId="a" fill="#F97316" name="Scope 3" />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Summary Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Region</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Sites</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Emissions</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Intensity</th>
            </tr>
          </thead>
          <tbody>
            {summaryData.map((item, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm font-medium text-gray-900">{item.region}</td>
                <td className="py-3 px-4 text-sm text-gray-700 text-right">{item.sites}</td>
                <td className="py-3 px-4 text-sm text-gray-700 text-right">
                  {item.emissions.toLocaleString()} tCO₂e
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 text-right">
                  {item.intensity} tCO₂e/m²
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmissionsByRegion;

