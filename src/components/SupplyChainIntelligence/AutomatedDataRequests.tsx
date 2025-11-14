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

interface DataRequest {
  supplier: string;
  requestType: string;
  sentDate: string;
  dueDate: string;
  daysRemaining: number;
  status: 'Submitted' | 'Overdue' | 'In Progress' | 'Not Started';
  dataQuality: 'High' | null;
}

const AutomatedDataRequests: React.FC = () => {
  const data: DataRequest[] = [
    {
      supplier: 'TechComponents Inc',
      requestType: 'Annual Emissions',
      sentDate: '2024-05-01',
      dueDate: '2024-06-15',
      daysRemaining: -517,
      status: 'Submitted',
      dataQuality: 'High',
    },
    {
      supplier: 'Global Materials Co',
      requestType: 'Product PCF',
      sentDate: '2024-05-15',
      dueDate: '2024-06-30',
      daysRemaining: -502,
      status: 'Submitted',
      dataQuality: 'High',
    },
    {
      supplier: 'Pacific Logistics',
      requestType: 'Annual Emissions',
      sentDate: '2024-04-20',
      dueDate: '2024-06-05',
      daysRemaining: -527,
      status: 'Overdue',
      dataQuality: null,
    },
    {
      supplier: 'EuroParts Manufacturing',
      requestType: 'Energy Data',
      sentDate: '2024-05-10',
      dueDate: '2024-06-25',
      daysRemaining: -507,
      status: 'In Progress',
      dataQuality: null,
    },
    {
      supplier: 'Asia Metals Group',
      requestType: 'Annual Emissions',
      sentDate: '2024-05-25',
      dueDate: '2024-07-10',
      daysRemaining: -492,
      status: 'Not Started',
      dataQuality: null,
    },
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-green-600 text-white';
      case 'Overdue':
        return 'bg-red-600 text-white';
      case 'In Progress':
        return 'bg-orange-600 text-white';
      case 'Not Started':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  const formatDaysRemaining = (days: number) => {
    const absDays = Math.abs(days);
    return `${absDays} days late`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Automated Data Requests</h2>
        <p className="text-sm text-gray-600">Track and manage supplier data collection workflows.</p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <div className="min-w-full inline-block align-middle">
          <Table className="min-w-[1000px]">
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Supplier</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Request Type</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Sent Date</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Due Date</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap text-center">Days Remaining</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap text-center">Status</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap text-center">Data Quality</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="border-b border-gray-200">
                  <TableCell className="text-gray-900 whitespace-nowrap">
                    {row.supplier}
                  </TableCell>
                  <TableCell className="text-gray-900 whitespace-nowrap">
                    {row.requestType}
                  </TableCell>
                  <TableCell className="text-gray-900 whitespace-nowrap">
                    {formatDate(row.sentDate)}
                  </TableCell>
                  <TableCell className="text-gray-900 whitespace-nowrap">
                    {formatDate(row.dueDate)}
                  </TableCell>
                  <TableCell className="text-center whitespace-nowrap">
                    <span className="text-red-600 font-medium">
                      {formatDaysRemaining(row.daysRemaining)}
                    </span>
                  </TableCell>
                  <TableCell className="text-center whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-center whitespace-nowrap">
                    {row.dataQuality ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">
                        {row.dataQuality}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Remind
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </Button>
                    </div>
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

export default AutomatedDataRequests;

