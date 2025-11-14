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

interface Initiative {
  initiative: string;
  site: string;
  annualSavings: string;
  investment: string;
  payback: string;
  status: 'In Progress' | 'Complete' | 'Planned';
}

const ReductionInitiatives: React.FC = () => {
  const data: Initiative[] = [
    {
      initiative: 'Solar Panel Installation',
      site: 'Manufacturing - Texas',
      annualSavings: '1,245 tCO₂e',
      investment: '$450k',
      payback: '3.6 yrs',
      status: 'In Progress',
    },
    {
      initiative: 'LED Lighting Upgrade',
      site: 'HQ - New York',
      annualSavings: '234 tCO₂e',
      investment: '$85k',
      payback: '2.9 yrs',
      status: 'Complete',
    },
    {
      initiative: 'Fleet Electrification',
      site: 'All Sites',
      annualSavings: '2,876 tCO₂e',
      investment: '$1200k',
      payback: '4.2 yrs',
      status: 'Planned',
    },
    {
      initiative: 'HVAC Optimization',
      site: 'Office - London',
      annualSavings: '456 tCO₂e',
      investment: '$120k',
      payback: '2.1 yrs',
      status: 'Complete',
    },
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-green-600 text-white';
      case 'Complete':
        return 'bg-blue-600 text-white';
      case 'Planned':
        return 'bg-gray-300 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Header with Title and Button */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Reduction Initiatives</h2>
          <p className="text-sm text-gray-600">Active and planned decarbonization projects</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 2.5L6.25 10H10L8.75 17.5L13.75 10H10L11.25 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
          </svg>
          Add Initiative
        </Button>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <div className="min-w-full inline-block align-middle">
          <Table className="min-w-[800px]">
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Initiative</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Site</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Annual Savings</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Investment</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Payback</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="border-b border-gray-200">
                  <TableCell className="text-gray-900 font-medium whitespace-nowrap">
                    {row.initiative}
                  </TableCell>
                  <TableCell className="text-gray-900 whitespace-nowrap">
                    {row.site}
                  </TableCell>
                  <TableCell className="text-gray-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                        <path d="M2.5 5L7.5 10L12.5 7.5L17.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 12.5V15.83H2.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{row.annualSavings}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                        <path d="M10 2.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 6.67C7.5 5.58 8.25 4.83 9.33 4.83H10.67C11.75 4.83 12.5 5.58 12.5 6.67C12.5 7.75 11.75 8.5 10.67 8.5H9.33C8.25 8.5 7.5 9.25 7.5 10.33C7.5 11.42 8.25 12.17 9.33 12.17H10.67C11.75 12.17 12.5 12.92 12.5 14C12.5 15.08 11.75 15.83 10.67 15.83H9.33C8.25 15.83 7.5 15.08 7.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{row.investment}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 5V10L13.33 11.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{row.payback}</span>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
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

export default ReductionInitiatives;

