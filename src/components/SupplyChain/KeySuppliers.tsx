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

const KeySuppliers: React.FC = () => {
  const data = [
    {
      supplier: 'Global Materials Inc.',
      category: 'Cat 1',
      emissions: 8945,
      annualSpend: 2456789,
      pcfStatus: 'Submitted',
      statusColor: 'blue',
      lastUpdate: '2024-11-05',
    },
    {
      supplier: 'Advanced Tech Solutions',
      category: 'Cat 2',
      emissions: 6732,
      annualSpend: 1987654,
      pcfStatus: 'Approved',
      statusColor: 'green',
      lastUpdate: '2024-11-03',
    },
    {
      supplier: 'Logistics Partners Ltd',
      category: 'Cat 4',
      emissions: 4521,
      annualSpend: 987432,
      pcfStatus: 'Pending',
      statusColor: 'orange',
      lastUpdate: '2024-11-07',
    },
    {
      supplier: 'Energy Suppliers Co.',
      category: 'Cat 3',
      emissions: 3876,
      annualSpend: 1234567,
      pcfStatus: 'Submitted',
      statusColor: 'blue',
      lastUpdate: '2024-11-06',
    },
    {
      supplier: 'Manufacturing Solutions',
      category: 'Cat 1',
      emissions: 5234,
      annualSpend: 1654321,
      pcfStatus: 'Not Started',
      statusColor: null,
      lastUpdate: '2024-10-28',
    },
  ];

  const getStatusBadgeClass = (statusColor: string | null) => {
    if (!statusColor) return '';
    switch (statusColor) {
      case 'blue':
        return 'bg-blue-100 text-blue-800';
      case 'green':
        return 'bg-green-100 text-green-800';
      case 'orange':
        return 'bg-orange-100 text-orange-800';
      default:
        return '';
    }
  };

  const formatAnnualSpend = (amount: number) => {
    return `$${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Key Suppliers</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-gray-900">Supplier</TableHead>
            <TableHead className="font-semibold text-gray-900">Category</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Emissions (tCO₂e)</TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">Annual Spend</TableHead>
            <TableHead className="font-semibold text-gray-900">PCF Status</TableHead>
            <TableHead className="font-semibold text-gray-900">Last Update</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-b border-gray-200">
              <TableCell className="font-medium text-gray-900">{row.supplier}</TableCell>
              <TableCell className="text-gray-600">{row.category}</TableCell>
              <TableCell className="text-gray-900 text-right">{row.emissions.toLocaleString()}</TableCell>
              <TableCell className="text-gray-900 text-right">{formatAnnualSpend(row.annualSpend)}</TableCell>
              <TableCell>
                {row.statusColor ? (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(row.statusColor)}`}>
                    {row.pcfStatus}
                  </span>
                ) : (
                  <span className="text-gray-600">{row.pcfStatus}</span>
                )}
              </TableCell>
              <TableCell className="text-gray-600">{row.lastUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default KeySuppliers;

