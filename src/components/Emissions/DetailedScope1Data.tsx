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

const DetailedScope1Data: React.FC = () => {
  const data = [
    {
      source: 'Natural Gas',
      category: 'Fuel Combustion',
      emissions: 18567,
      percentage: 44,
      status: 'Verified',
    },
    {
      source: 'Fleet Vehicles',
      category: 'Mobile Combustion',
      emissions: 12389,
      percentage: 29.4,
      status: 'Verified',
    },
    {
      source: 'Refrigerants',
      category: 'Fugitive Emissions',
      emissions: 8945,
      percentage: 21.2,
      status: 'Verified',
    },
    {
      source: 'Diesel Generators',
      category: 'Stationary Combustion',
      emissions: 2255,
      percentage: 5.4,
      status: 'Verified',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Detailed Scope 1 Data</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-gray-900">Source</TableHead>
            <TableHead className="font-semibold text-gray-900">Category</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Emissions (tCO₂e)</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Percentage</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-b border-gray-200">
              <TableCell className="font-medium text-gray-900">{row.source}</TableCell>
              <TableCell className="text-gray-600">{row.category}</TableCell>
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

export default DetailedScope1Data;

