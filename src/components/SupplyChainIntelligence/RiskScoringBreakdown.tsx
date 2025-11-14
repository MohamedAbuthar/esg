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

interface RiskData {
  supplier: string;
  overallRisk: {
    level: 'Low' | 'Medium' | 'High';
    score: number;
  };
  emissionsRisk: number;
  engagementRisk: number;
  complianceRisk: number;
  financialRisk: number;
  geographicRisk: number;
}

const RiskScoringBreakdown: React.FC = () => {
  const data: RiskData[] = [
    {
      supplier: 'TechComponents Inc',
      overallRisk: { level: 'Low', score: 35 },
      emissionsRisk: 3,
      engagementRisk: 5,
      complianceRisk: 4,
      financialRisk: 4,
      geographicRisk: 5,
    },
    {
      supplier: 'Global Materials Co',
      overallRisk: { level: 'Low', score: 22 },
      emissionsRisk: 0,
      engagementRisk: 0,
      complianceRisk: 3,
      financialRisk: 4,
      geographicRisk: 5,
    },
    {
      supplier: 'Pacific Logistics',
      overallRisk: { level: 'Medium', score: 58 },
      emissionsRisk: 5,
      engagementRisk: 12,
      complianceRisk: 10,
      financialRisk: 11,
      geographicRisk: 8,
    },
    {
      supplier: 'EuroParts Manufacturing',
      overallRisk: { level: 'Low', score: 28 },
      emissionsRisk: 0,
      engagementRisk: 4,
      complianceRisk: 5,
      financialRisk: 5,
      geographicRisk: 5,
    },
    {
      supplier: 'Asia Metals Group',
      overallRisk: { level: 'High', score: 72 },
      emissionsRisk: 6,
      engagementRisk: 18,
      complianceRisk: 16,
      financialRisk: 12,
      geographicRisk: 8,
    },
  ];

  const getRiskPillClass = (level: 'Low' | 'Medium' | 'High') => {
    switch (level) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderRiskBar = (riskValue: number) => {
    const maxRisk = 20; // Maximum risk value for scaling
    const percentage = Math.min((riskValue / maxRisk) * 100, 100);
    
    return (
      <div className="w-full h-3 bg-green-100 rounded-full overflow-hidden flex items-center relative">
        {percentage > 0 && (
          <div
            className="h-full rounded-full"
            style={{
              width: `${percentage}%`,
              background: 'linear-gradient(to right, #1E40AF 0%, #3B82F6 100%)',
            }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Risk Scoring Breakdown</h2>
        <p className="text-sm text-gray-600">Detailed risk assessment with factor contributions</p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <div className="min-w-full inline-block align-middle">
          <Table className="min-w-[1000px]">
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Supplier</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Overall Risk</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Emissions Risk</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Engagement Risk</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Compliance Risk</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Financial Risk</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Geographic Risk</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="border-b border-gray-200">
                  <TableCell className="text-gray-900 font-medium whitespace-nowrap">
                    {row.supplier}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskPillClass(
                          row.overallRisk.level
                        )}`}
                      >
                        {row.overallRisk.level} Risk
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {row.overallRisk.score}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap" style={{ minWidth: '120px' }}>
                    {renderRiskBar(row.emissionsRisk)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap" style={{ minWidth: '120px' }}>
                    {renderRiskBar(row.engagementRisk)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap" style={{ minWidth: '120px' }}>
                    {renderRiskBar(row.complianceRisk)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap" style={{ minWidth: '120px' }}>
                    {renderRiskBar(row.financialRisk)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap" style={{ minWidth: '120px' }}>
                    {renderRiskBar(row.geographicRisk)}
                  </TableCell>
                  <TableCell className="text-right whitespace-nowrap">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Mitigate
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RiskScoringBreakdown;

