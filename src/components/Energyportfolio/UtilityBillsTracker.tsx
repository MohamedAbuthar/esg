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
import { Button } from '../ui/button';

interface UtilityBill {
  billId: string;
  site: string;
  utility: string;
  period: string;
  consumption: string;
  cost: string;
  status: 'processed' | 'pending';
}

const UtilityBillsTracker: React.FC = () => {
  const data: UtilityBill[] = [
    {
      billId: 'BILL-2024-06-001',
      site: 'HQ - New York',
      utility: 'Electricity',
      period: 'Jun 2024',
      consumption: '1,56,000 kWh',
      cost: '$23,400',
      status: 'processed',
    },
    {
      billId: 'BILL-2024-06-002',
      site: 'Manufacturing - Texas',
      utility: 'Natural Gas',
      period: 'Jun 2024',
      consumption: '28,000 m³',
      cost: '$8,960',
      status: 'processed',
    },
    {
      billId: 'BILL-2024-05-001',
      site: 'Office - London',
      utility: 'Electricity',
      period: 'May 2024',
      consumption: '3,42,000 kWh',
      cost: '$41,040',
      status: 'processed',
    },
    {
      billId: 'BILL-2024-05-002',
      site: 'Distribution - California',
      utility: 'Electricity',
      period: 'May 2024',
      consumption: '45,000 kWh',
      cost: '$9,450',
      status: 'pending',
    },
    {
      billId: 'BILL-2024-04-001',
      site: 'HQ - New York',
      utility: 'Natural Gas',
      period: 'Apr 2024',
      consumption: '89,000 m³',
      cost: '$14,240',
      status: 'processed',
    },
  ];

  const getStatusBadge = (status: string) => {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    switch (status) {
      case 'processed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseClasses} bg-orange-100 text-orange-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Utility Bills Tracker
          </h2>
          <p className="text-sm text-gray-600">
            Upload, validate, and track utility bills across your portfolio
          </p>
        </div>
        <Button
          className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12V4M4 8L8 4L12 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Upload Bills
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Bill ID
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Site
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Utility
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Period
            </TableHead>
            <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap px-4 py-3">
              Consumption
            </TableHead>
            <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap px-4 py-3">
              Cost
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Status
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-b border-gray-200 hover:bg-gray-50">
              <TableCell className="text-gray-900 font-medium whitespace-nowrap px-4 py-3">
                {row.billId}
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap px-4 py-3">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400 flex-shrink-0"
                  >
                    <path
                      d="M2.67 14.67V5.33C2.67 4.6 3.27 4 4 4H6.67V2.67C6.67 1.93 7.27 1.33 8 1.33H12C12.73 1.33 13.33 1.93 13.33 2.67V14.67"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.67 14.67H13.33V8H8H6.67V14.67Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 8V14.67"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{row.site}</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap px-4 py-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
                  {row.utility}
                </span>
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap px-4 py-3">
                {row.period}
              </TableCell>
              <TableCell className="text-gray-900 text-right whitespace-nowrap px-4 py-3">
                {row.consumption}
              </TableCell>
              <TableCell className="text-gray-900 text-right font-medium whitespace-nowrap px-4 py-3">
                {row.cost}
              </TableCell>
              <TableCell className="whitespace-nowrap px-4 py-3">
                <span className={getStatusBadge(row.status)}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell className="whitespace-nowrap px-4 py-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-xs text-gray-600 hover:text-gray-900 font-normal"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UtilityBillsTracker;

