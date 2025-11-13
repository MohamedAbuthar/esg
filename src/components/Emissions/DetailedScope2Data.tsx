'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const DetailedScope2Data: React.FC = () => {
  const data = [
    {
      source: 'Grid Electricity',
      method: 'Location-based',
      emissions: 35847,
      percentage: 92,
      status: 'Verified',
    },
    {
      source: 'Grid Electricity',
      method: 'Market-based',
      emissions: 28942,
      percentage: 74.3,
      status: 'Verified',
    },
    {
      source: 'Steam/Heat',
      method: 'Purchased',
      emissions: 3095,
      percentage: 7.9,
      status: 'Verified',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Detailed Scope 2 Data</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-gray-900">Source</TableHead>
            <TableHead className="font-semibold text-gray-900">Method</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Emissions (tCO₂e)</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Percentage</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-b border-gray-200">
              <TableCell className="font-medium text-gray-900">{row.source}</TableCell>
              <TableCell className="text-gray-600">{row.method}</TableCell>
              <TableCell className="text-gray-900 text-right">{row.emissions.toLocaleString()}</TableCell>
              <TableCell className="text-gray-900 text-right">{row.percentage}%</TableCell>
              <TableCell className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DetailedScope2Data;

