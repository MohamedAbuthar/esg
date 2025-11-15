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

const WaterBySource: React.FC = () => {
  const data = [
    {
      source: 'Municipal',
      volume: 165420,
      percentage: 58,
      cost: 145200,
    },
    {
      source: 'Groundwater',
      volume: 85000,
      percentage: 30,
      cost: 42500,
    },
    {
      source: 'Rainwater Harvesting',
      volume: 25000,
      percentage: 9,
      cost: 8500,
    },
    {
      source: 'Recycled',
      volume: 10000,
      percentage: 3,
      cost: 5000,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header with Title and Add Source Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Water by Source</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
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
          Add Source
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Source
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Volume (m³)
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Percentage
            </TableHead>
            <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap px-4 py-3">
              Cost ($)
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
                {row.source}
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap px-4 py-3">
                {row.volume.toLocaleString('en-IN')} m³
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
              <TableCell className="text-gray-900 text-right font-medium whitespace-nowrap px-4 py-3">
                ${row.cost.toLocaleString('en-IN')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WaterBySource;

