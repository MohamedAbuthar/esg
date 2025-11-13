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

const SupplierEmissionsSpendAnalysis: React.FC = () => {
  const data = [
    {
      supplierId: 'SUP-001',
      name: 'TechComponents Inc',
      category: 'Electronics Manufacturing',
      tier: 'Tier 1',
      annualSpend: 2.50,
      estEmissions: 8750,
      intensity: 3.50,
      dataQuality: 'Spend-Based',
      dataQualityColor: 'orange',
      reductionYoY: '-12%',
    },
    {
      supplierId: 'SUP-002',
      name: 'Global Materials Co',
      category: 'Raw Materials',
      tier: 'Tier 1',
      annualSpend: 4.20,
      estEmissions: 16800,
      intensity: 4.00,
      dataQuality: 'Primary Data',
      dataQualityColor: 'green',
      reductionYoY: '-18%',
    },
    {
      supplierId: 'SUP-003',
      name: 'Pacific Logistics',
      category: 'Transportation',
      tier: 'Tier 2',
      annualSpend: 0.85,
      estEmissions: 3400,
      intensity: 4.00,
      dataQuality: 'Spend-Based',
      dataQualityColor: 'orange',
      reductionYoY: '-',
    },
    {
      supplierId: 'SUP-004',
      name: 'EuroParts Manufacturing',
      category: 'Components',
      tier: 'Tier 1',
      annualSpend: 3.10,
      estEmissions: 10850,
      intensity: 3.50,
      dataQuality: 'Primary Data',
      dataQualityColor: 'green',
      reductionYoY: '-15%',
    },
    {
      supplierId: 'SUP-005',
      name: 'Asia Metals Group',
      category: 'Raw Materials',
      tier: 'Tier 2',
      annualSpend: 1.80,
      estEmissions: 9000,
      intensity: 5.00,
      dataQuality: 'Industry Average',
      dataQualityColor: 'teal',
      reductionYoY: '-',
    },
  ];

  const getDataQualityBadgeClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-800';
      case 'orange':
        return 'bg-orange-100 text-orange-800';
      case 'teal':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTierBadgeClass = () => {
    return 'bg-gray-100 text-gray-800';
  };

  return (
      <div className="space-y-6 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Supplier Emissions & Spend Analysis</h2>
        <p className="text-gray-600">Detailed spend-based emissions estimation with data quality indicators</p>
      </div>

      {/* Control Bar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search suppliers..."
            className="w-full pl-10 pr-4 py-2 h-9 border border-gray-300 rounded-md text-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 h-9 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Tiers</option>
            <option>Tier 1</option>
            <option>Tier 2</option>
            <option>Tier 3</option>
          </select>
          <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 h-9">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33 5.83H16.67M3.33 10H16.67M3.33 14.17H16.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="5" cy="5.83" r="1.5" fill="currentColor"/>
            <circle cx="5" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="5" cy="14.17" r="1.5" fill="currentColor"/>
          </svg>
          Filters
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="p-6">
            <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200 bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left">Supplier ID</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left">Name</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left">Category</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left">Tier</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-right">Annual Spend</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-right">Est. Emissions</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-right">Intensity</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left">Data Quality</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-right">Reduction YoY</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-gray-900 py-3 px-4 text-left">{row.supplierId}</TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-left font-medium">{row.name}</TableCell>
                  <TableCell className="text-gray-600 py-3 px-4 text-left">{row.category}</TableCell>
                  <TableCell className="py-3 px-4 text-left">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {row.tier}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-right font-medium">${row.annualSpend}M</TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-right font-bold">{row.estEmissions.toLocaleString()} tCO2e</TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-right">{row.intensity} kg/$</TableCell>
                  <TableCell className="py-3 px-4 text-left">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDataQualityBadgeClass(row.dataQualityColor)}`}>
                      {row.dataQuality}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-right">
                    {row.reductionYoY === '-' ? (
                      <span className="text-gray-600">{row.reductionYoY}</span>
                    ) : (
                      <span className="text-green-600 font-medium">{row.reductionYoY}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierEmissionsSpendAnalysis;

