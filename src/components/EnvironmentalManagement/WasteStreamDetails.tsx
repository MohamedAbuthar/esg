'use client';

import React from 'react';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const WasteStreamDetails: React.FC = () => {
  const data = [
    {
      wasteType: 'Recyclables',
      amount: 845,
      percentage: 45.8,
      disposalMethod: 'Recyclables',
      status: 'Low Impact',
      statusColor: 'blue',
    },
    {
      wasteType: 'Organic/Compost',
      amount: 494,
      percentage: 26.7,
      disposalMethod: 'Organic/Compost',
      status: 'Low Impact',
      statusColor: 'blue',
    },
    {
      wasteType: 'Landfill',
      amount: 328,
      percentage: 17.8,
      disposalMethod: 'Landfill',
      status: 'High Impact',
      statusColor: 'red',
    },
    {
      wasteType: 'Incineration',
      amount: 180,
      percentage: 9.7,
      disposalMethod: 'Incineration',
      status: 'Low Impact',
      statusColor: 'blue',
    },
  ];

  const getStatusBadge = (status: string, statusColor: string) => {
    if (statusColor === 'red') {
      return 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white';
    }
    return 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header with Title and Add Waste Stream Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Waste Stream Details
        </h2>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3.33V12.67M3.33 8H12.67"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Add Waste Stream
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Waste Type
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Amount (tons)
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Percentage
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Disposal Method
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <TableCell className="text-gray-900 font-medium whitespace-nowrap px-4 py-3">
                {row.wasteType}
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap px-4 py-3">
                {row.amount.toLocaleString()}
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-[150px] max-w-[300px]">
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden relative">
                      {row.percentage > 2.5 ? (
                        <div
                          className="h-full flex"
                          style={{ width: `${row.percentage}%` }}
                        >
                          {/* Small teal segment at the beginning (2.5% of total bar width) */}
                          <div
                            className="h-full flex-shrink-0"
                            style={{
                              width: `${(2.5 / row.percentage) * 100}%`,
                              backgroundColor: '#0D9488',
                            }}
                          />
                          {/* Green segment for the rest */}
                          <div
                            className="h-full bg-green-500 flex-1"
                          />
                        </div>
                      ) : (
                        <div
                          className="h-full"
                          style={{
                            width: `${row.percentage}%`,
                            backgroundColor: '#0D9488',
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 min-w-[45px] text-right">
                    {row.percentage}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap px-4 py-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
                  {row.disposalMethod}
                </span>
              </TableCell>
              <TableCell className="whitespace-nowrap px-4 py-3">
                <span className={getStatusBadge(row.status, row.statusColor)}>
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

export default WasteStreamDetails;

