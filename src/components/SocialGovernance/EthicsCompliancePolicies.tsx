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

interface Policy {
  policyName: string;
  coverage: number;
  trainingCompletion: number;
  lastReview: string;
  status: 'Active' | 'Under Review';
}

const EthicsCompliancePolicies: React.FC = () => {
  const data: Policy[] = [
    {
      policyName: 'Code of Conduct',
      coverage: 100,
      trainingCompletion: 99.2,
      lastReview: '2024-01',
      status: 'Active',
    },
    {
      policyName: 'Anti-Bribery & Corruption',
      coverage: 100,
      trainingCompletion: 98.5,
      lastReview: '2024-03',
      status: 'Active',
    },
    {
      policyName: 'Whistleblower Protection',
      coverage: 100,
      trainingCompletion: 97.8,
      lastReview: '2023-11',
      status: 'Under Review',
    },
    {
      policyName: 'Data Privacy & Protection',
      coverage: 100,
      trainingCompletion: 99.5,
      lastReview: '2024-02',
      status: 'Active',
    },
    {
      policyName: 'Conflict of Interest',
      coverage: 100,
      trainingCompletion: 96.8,
      lastReview: '2024-01',
      status: 'Active',
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'Active') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-600 text-white';
    }
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Ethics & Compliance Policies
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
          Add Policy
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Policy Name
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Coverage (%)
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Training Completion (%)
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Last Review
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
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
              <TableCell className="text-gray-900 font-medium px-4 py-3">
                {row.policyName}
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex items-center justify-end gap-3">
                  <div className="flex-1 min-w-[100px] max-w-[200px]">
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-600 rounded-full"
                        style={{ width: `${row.coverage}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 min-w-[45px] text-right">
                    {row.coverage}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex items-center justify-end gap-3">
                  <div className="flex-1 min-w-[100px] max-w-[200px]">
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-600 rounded-full"
                        style={{ width: `${row.trainingCompletion}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 min-w-[50px] text-right">
                    {row.trainingCompletion}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-gray-900 px-4 py-3">
                {row.lastReview}
              </TableCell>
              <TableCell className="px-4 py-3">
                <span className={getStatusBadge(row.status)}>
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

export default EthicsCompliancePolicies;

