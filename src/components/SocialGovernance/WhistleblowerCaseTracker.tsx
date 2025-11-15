'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../ui/table';

interface WhistleblowerCase {
  caseId: string;
  category: string;
  severity: 'High' | 'Medium' | 'Low';
  status: 'Investigating' | 'Resolved' | 'Under Review';
  daysOpen: number;
  region: string;
}

const WhistleblowerCaseTracker: React.FC = () => {
  const data: WhistleblowerCase[] = [
    {
      caseId: 'WB-2024-012',
      category: 'Workplace Harassment',
      severity: 'High',
      status: 'Investigating',
      daysOpen: 15,
      region: 'EMEA',
    },
    {
      caseId: 'WB-2024-011',
      category: 'Financial Irregularity',
      severity: 'Medium',
      status: 'Resolved',
      daysOpen: 42,
      region: 'Americas',
    },
    {
      caseId: 'WB-2024-010',
      category: 'Safety Violation',
      severity: 'High',
      status: 'Investigating',
      daysOpen: 8,
      region: 'APAC',
    },
    {
      caseId: 'WB-2024-009',
      category: 'Discrimination',
      severity: 'Medium',
      status: 'Under Review',
      daysOpen: 23,
      region: 'Americas',
    },
  ];

  const getSeverityBadge = (severity: string) => {
    if (severity === 'High') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white';
    }
    if (severity === 'Medium') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-600 text-white';
    }
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-400 text-white';
  };

  const getStatusBadge = (status: string) => {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700';
  };

  const openCasesCount = data.filter((case_) => case_.status !== 'Resolved').length;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Whistleblower Case Tracker
        </h2>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700">
          {openCasesCount} Open Cases
        </span>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Case ID
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Category
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Severity
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Status
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Days Open
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Region
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
                {row.caseId}
              </TableCell>
              <TableCell className="text-gray-900 px-4 py-3">
                {row.category}
              </TableCell>
              <TableCell className="px-4 py-3">
                <span className={getSeverityBadge(row.severity)}>
                  {row.severity}
                </span>
              </TableCell>
              <TableCell className="px-4 py-3">
                <span className={getStatusBadge(row.status)}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell className="text-gray-900 px-4 py-3">
                {row.daysOpen}
              </TableCell>
              <TableCell className="text-gray-900 px-4 py-3">
                {row.region}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WhistleblowerCaseTracker;

