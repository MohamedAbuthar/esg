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

interface SupplierAssessment {
  supplier: string;
  region: string;
  riskScore: number;
  lastAudit: string;
  findings: number | null;
  status: 'Compliant' | 'Action Plan' | 'Critical';
}

const SupplierHumanRightsAssessments: React.FC = () => {
  const data: SupplierAssessment[] = [
    {
      supplier: 'TechMfg Co Ltd',
      region: 'APAC',
      riskScore: 72,
      lastAudit: '2024-05',
      findings: 3,
      status: 'Action Plan',
    },
    {
      supplier: 'Global Textiles Inc',
      region: 'Americas',
      riskScore: 45,
      lastAudit: '2024-04',
      findings: 1,
      status: 'Compliant',
    },
    {
      supplier: 'Euro Components GmbH',
      region: 'EMEA',
      riskScore: 28,
      lastAudit: '2024-06',
      findings: null,
      status: 'Compliant',
    },
    {
      supplier: 'Asia Manufacturing Ltd',
      region: 'APAC',
      riskScore: 85,
      lastAudit: '2024-03',
      findings: 7,
      status: 'Critical',
    },
    {
      supplier: 'Pacific Logistics Corp',
      region: 'APAC',
      riskScore: 58,
      lastAudit: '2024-05',
      findings: 2,
      status: 'Action Plan',
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'Compliant') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white';
    }
    if (status === 'Action Plan') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-teal-600 text-white';
    }
    if (status === 'Critical') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-red-600 text-white';
    }
    return 'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-400 text-white';
  };

  const getFindingsBadge = (findings: number | null) => {
    if (findings === null || findings === 0) {
      return null;
    }
    if (findings >= 5) {
      return 'inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium bg-red-600 text-white';
    }
    return 'inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium bg-blue-600 text-white';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Supplier Human Rights Assessments
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
          Schedule Audit
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Supplier
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Region
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Risk Score
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Last Audit
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Findings
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
                {row.supplier}
              </TableCell>
              <TableCell className="text-gray-900 px-4 py-3">
                {row.region}
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-[100px] max-w-[200px]">
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600 rounded-full"
                        style={{ width: `${row.riskScore}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 min-w-[35px]">
                    {row.riskScore}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-gray-900 px-4 py-3">
                {row.lastAudit}
              </TableCell>
              <TableCell className="px-4 py-3">
                {row.findings !== null && row.findings > 0 ? (
                  <span className={getFindingsBadge(row.findings)}>
                    {row.findings}
                  </span>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
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

export default SupplierHumanRightsAssessments;

