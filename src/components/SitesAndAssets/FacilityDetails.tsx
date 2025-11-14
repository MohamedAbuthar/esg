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

interface Facility {
  site: string;
  siteIcon: 'building' | 'factory' | 'warehouse';
  region: string;
  type: string;
  emissions: string;
  employees: number;
  area: string;
  intensity: string;
}

const FacilityDetails: React.FC = () => {
  const data: Facility[] = [
    {
      site: 'HQ - New York',
      siteIcon: 'building',
      region: 'North America',
      type: 'Office',
      emissions: '24,567 tCO₂e',
      employees: 450,
      area: '12,500',
      intensity: '1.97 tCO₂e/m²',
    },
    {
      site: 'Manufacturing - Texas',
      siteIcon: 'factory',
      region: 'North America',
      type: 'Production',
      emissions: '45,789 tCO₂e',
      employees: 280,
      area: '35,000',
      intensity: '1.31 tCO₂e/m²',
    },
    {
      site: 'Distribution - California',
      siteIcon: 'warehouse',
      region: 'North America',
      type: 'Warehouse',
      emissions: '18,234 tCO₂e',
      employees: 120,
      area: '22,000',
      intensity: '0.83 tCO₂e/m²',
    },
    {
      site: 'Office - London',
      siteIcon: 'building',
      region: 'Europe',
      type: 'Office',
      emissions: '15,432 tCO₂e',
      employees: 180,
      area: '8,500',
      intensity: '1.82 tCO₂e/m²',
    },
    {
      site: 'R&D - Berlin',
      siteIcon: 'building',
      region: 'Europe',
      type: 'Office',
      emissions: '12,678 tCO₂e',
      employees: 95,
      area: '6,800',
      intensity: '1.86 tCO₂e/m²',
    },
    {
      site: 'Manufacturing - Shanghai',
      siteIcon: 'factory',
      region: 'Asia',
      type: 'Production',
      emissions: '9,147 tCO₂e',
      employees: 340,
      area: '28,000',
      intensity: '0.33 tCO₂e/m²',
    },
  ];

  const getSiteIcon = (type: string) => {
    switch (type) {
      case 'factory':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33 17.5H16.67V8.33H3.33V17.5Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33 17.5V10.83H11.67V17.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33 8.33L10 2.5L16.67 8.33" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33 8.33H16.67" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="6.67" cy="6.67" r="0.83" fill="#3B82F6"/>
            <circle cx="13.33" cy="6.67" r="0.83" fill="#3B82F6"/>
          </svg>
        );
      case 'warehouse':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33 17.5H16.67V8.33H3.33V17.5Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33 8.33L10 2.5L16.67 8.33" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.67 17.5V12.5H13.33V17.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default: // building
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33 17.5H16.67V8.33H3.33V17.5Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33 17.5V10.83H11.67V17.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33 8.33L10 2.5L16.67 8.33" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Facility Details</h2>
          <p className="text-sm text-gray-600">Complete portfolio with key performance metrics</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33 17.5H16.67V8.33H3.33V17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33 17.5V10.83H11.67V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33 8.33L10 2.5L16.67 8.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add Site
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-6 px-6">
        <div className="min-w-full inline-block align-middle">
          <Table className="min-w-[900px]">
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="font-semibold text-gray-900 text-left px-4 py-3">Site</TableHead>
                <TableHead className="font-semibold text-gray-900 text-left px-4 py-3">Region</TableHead>
                <TableHead className="font-semibold text-gray-900 text-left px-4 py-3">Type</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right px-4 py-3">Emissions</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right px-4 py-3">Employees</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right px-4 py-3">Area (m²)</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right px-4 py-3">Intensity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="border-b border-gray-200">
                  <TableCell className="text-gray-900 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {getSiteIcon(row.siteIcon)}
                      </div>
                      <span className="font-medium">{row.site}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 flex-shrink-0">
                        <path d="M10 2.5C7.5 2.5 5.83 4.17 5.83 6.67C5.83 9.17 10 15.83 10 15.83C10 15.83 14.17 9.17 14.17 6.67C14.17 4.17 12.5 2.5 10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="10" cy="6.67" r="1.67" fill="currentColor"/>
                      </svg>
                      <span>{row.region}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900 px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {row.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-900 text-right px-4 py-3 whitespace-nowrap">{row.emissions}</TableCell>
                  <TableCell className="text-gray-900 text-right px-4 py-3 whitespace-nowrap">{row.employees.toLocaleString()}</TableCell>
                  <TableCell className="text-gray-900 text-right px-4 py-3 whitespace-nowrap">{row.area}</TableCell>
                  <TableCell className="text-gray-900 text-right px-4 py-3 whitespace-nowrap">{row.intensity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;

