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

interface RiskAssessment {
  riskCategory: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  affectedSuppliers: number;
  status: 'Monitored' | 'Action Required' | 'Critical';
}

const HumanRightsRiskAssessment: React.FC = () => {
  const data: RiskAssessment[] = [
    {
      riskCategory: 'Child Labor',
      riskLevel: 'Low',
      affectedSuppliers: 2,
      status: 'Monitored',
    },
    {
      riskCategory: 'Forced Labor',
      riskLevel: 'Medium',
      affectedSuppliers: 8,
      status: 'Action Required',
    },
    {
      riskCategory: 'Working Hours',
      riskLevel: 'Medium',
      affectedSuppliers: 12,
      status: 'Action Required',
    },
    {
      riskCategory: 'Freedom of Association',
      riskLevel: 'Low',
      affectedSuppliers: 5,
      status: 'Monitored',
    },
    {
      riskCategory: 'Health & Safety',
      riskLevel: 'High',
      affectedSuppliers: 15,
      status: 'Critical',
    },
    {
      riskCategory: 'Fair Wages',
      riskLevel: 'Medium',
      affectedSuppliers: 18,
      status: 'Action Required',
    },
  ];

  const getRiskLevelBadge = (riskLevel: string) => {
    if (riskLevel === 'Low') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white';
    }
    if (riskLevel === 'Medium') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white';
    }
    if (riskLevel === 'High') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white';
    }
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-400 text-white';
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Monitored') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700';
    }
    if (status === 'Action Required' || status === 'Critical') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white';
    }
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Human Rights Risk Assessment
        </h2>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Risk Category
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Risk Level
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Affected Suppliers
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Status
            </TableHead>
            <TableHead className="font-semibold text-gray-900 px-4 py-3">
              Actions
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
                {row.riskCategory}
              </TableCell>
              <TableCell className="px-4 py-3">
                <span className={getRiskLevelBadge(row.riskLevel)}>
                  {row.riskLevel}
                </span>
              </TableCell>
              <TableCell className="text-gray-900 px-4 py-3">
                {row.affectedSuppliers}
              </TableCell>
              <TableCell className="px-4 py-3">
                <span className={getStatusBadge(row.status)}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell className="px-4 py-3">
                <button className="text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline">
                  View Details
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HumanRightsRiskAssessment;

