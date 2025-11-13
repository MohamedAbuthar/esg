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

const CategoryDetails: React.FC = () => {
  const data = [
    {
      category: 'Cat 1: Purchased Goods',
      emissions: 18942,
      percentage: 42.3,
      suppliers: 245,
      status: 'Complete',
      statusColor: 'green',
    },
    {
      category: 'Cat 2: Capital Goods',
      emissions: 8756,
      percentage: 19.6,
      suppliers: 67,
      status: 'Complete',
      statusColor: 'green',
    },
    {
      category: 'Cat 3: Fuel & Energy',
      emissions: 4521,
      percentage: 10.1,
      suppliers: 12,
      status: 'Complete',
      statusColor: 'green',
    },
    {
      category: 'Cat 4: Upstream Transport',
      emissions: 5234,
      percentage: 11.7,
      suppliers: 34,
      status: 'In Progress',
      statusColor: 'orange',
    },
    {
      category: 'Cat 5: Waste',
      emissions: 1876,
      percentage: 4.2,
      suppliers: 8,
      status: 'Complete',
      statusColor: 'green',
    },
    {
      category: 'Cat 6: Business Travel',
      emissions: 3142,
      percentage: 7,
      suppliers: 15,
      status: 'Complete',
      statusColor: 'green',
    },
    {
      category: 'Cat 7: Employee Commute',
      emissions: 2278,
      percentage: 5.1,
      suppliers: 1,
      status: 'Estimated',
      statusColor: 'blue',
    },
  ];

  const getStatusBadgeClass = (statusColor: string) => {
    switch (statusColor) {
      case 'green':
        return 'bg-green-100 text-green-800';
      case 'orange':
        return 'bg-orange-100 text-orange-800';
      case 'blue':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Category Details</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-gray-900">Category</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Emissions (tCO₂e)</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">% of Scope 3</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Suppliers</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-b border-gray-200">
              <TableCell className="font-medium text-gray-900">{row.category}</TableCell>
              <TableCell className="text-gray-900 text-right">{row.emissions.toLocaleString()}</TableCell>
              <TableCell className="text-gray-900 text-right">{row.percentage}%</TableCell>
              <TableCell className="text-gray-900 text-right">{row.suppliers}</TableCell>
              <TableCell className="text-right">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(row.statusColor)}`}>
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

export default CategoryDetails;

