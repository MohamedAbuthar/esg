'use client';

import React from 'react';
import { Button } from '../ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../ui/table';

interface Program {
  initiative: string;
  investment: string;
  beneficiaries: string;
  location: string;
}

const CommunityImpactPrograms: React.FC = () => {
  const data: Program[] = [
    {
      initiative: 'STEM Education Programs',
      investment: '$8,50,000',
      beneficiaries: '15,000',
      location: 'Global',
    },
    {
      initiative: 'Local Employment Initiative',
      investment: '$5,20,000',
      beneficiaries: '450',
      location: 'Manufacturing Sites',
    },
    {
      initiative: 'Community Health Programs',
      investment: '$3,80,000',
      beneficiaries: '8,500',
      location: 'Operating Regions',
    },
    {
      initiative: 'Environmental Conservation',
      investment: '$4,50,000',
      beneficiaries: '25,000',
      location: 'Site Communities',
    },
    {
      initiative: 'Disaster Relief Fund',
      investment: '$2,50,000',
      beneficiaries: '3,200',
      location: 'Emergency Response',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Community Impact Programs
        </h2>
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
              d="M8 3.33V12.67M3.33 8H12.67"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          New Initiative
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Initiative
            </TableHead>
            <TableHead className="font-semibold text-gray-900 text-right px-4 py-3">
              Investment ($)
            </TableHead>
            <TableHead className="font-semibold text-gray-900 text-right px-4 py-3">
              Beneficiaries
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Location
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <TableCell className="text-gray-900 font-medium px-4 py-3">
                {row.initiative}
              </TableCell>
              <TableCell className="text-gray-900 text-right px-4 py-3">
                {row.investment}
              </TableCell>
              <TableCell className="text-gray-900 text-right px-4 py-3">
                {row.beneficiaries}
              </TableCell>
              <TableCell className="text-gray-900 px-4 py-3">
                {row.location}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CommunityImpactPrograms;
