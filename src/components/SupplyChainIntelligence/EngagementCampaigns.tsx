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

const EngagementCampaigns: React.FC = () => {
  const data = [
    {
      campaignId: 'CAMP-001',
      name: '2024 Climate Action Campaign',
      launched: '2024-01-15',
      targetSuppliers: 50,
      contacted: 50,
      responded: 38,
      submitted: 35,
      responseRate: 76,
      deadline: '2024-08-31',
      status: 'Active',
    },
    {
      campaignId: 'CAMP-002',
      name: 'SBTi Commitment Drive',
      launched: '2024-03-01',
      targetSuppliers: 25,
      contacted: 25,
      responded: 18,
      submitted: 15,
      responseRate: 72,
      deadline: '2024-09-30',
      status: 'Active',
    },
    {
      campaignId: 'CAMP-003',
      name: 'Q1 Data Collection',
      launched: '2024-04-01',
      targetSuppliers: 75,
      contacted: 75,
      responded: 68,
      submitted: 65,
      responseRate: 91,
      deadline: '2024-05-31',
      status: 'Completed',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Engagement Campaigns</h2>
        <p className="text-gray-600">Track supplier engagement initiatives and response rates</p>
      </div>

      {/* Table */}
      <div className="w-full max-w-full overflow-hidden">
        <div className="overflow-x-auto w-full">
          <Table className="w-full" style={{ minWidth: '1000px' }}>
            <TableHeader>
              <TableRow className="border-b border-gray-200 bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left whitespace-nowrap">Campaign ID</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left whitespace-nowrap">Name</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left whitespace-nowrap">Launched</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-right whitespace-nowrap">Target Suppliers</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-right whitespace-nowrap">Contacted</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-right whitespace-nowrap">Responded</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-right whitespace-nowrap">Submitted</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left whitespace-nowrap">Response Rate</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left whitespace-nowrap">Deadline</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left whitespace-nowrap">Status</TableHead>
                <TableHead className="font-semibold text-gray-900 py-3 px-4 text-left whitespace-nowrap">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-gray-900 py-3 px-4 text-left whitespace-nowrap">{row.campaignId}</TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-left whitespace-nowrap">{row.name}</TableCell>
                  <TableCell className="text-gray-600 py-3 px-4 text-left whitespace-nowrap">{row.launched}</TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-right whitespace-nowrap">{row.targetSuppliers}</TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-right whitespace-nowrap">{row.contacted}</TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-right whitespace-nowrap">{row.responded}</TableCell>
                  <TableCell className="text-gray-900 py-3 px-4 text-right font-bold whitespace-nowrap">{row.submitted}</TableCell>
                  <TableCell className="py-3 px-4 text-left whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900 font-medium">{row.responseRate}%</span>
                      <div className="flex-1 max-w-[100px] h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-600 rounded-full"
                          style={{ width: `${row.responseRate}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 py-3 px-4 text-left whitespace-nowrap">{row.deadline}</TableCell>
                  <TableCell className="py-3 px-4 text-left whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-left whitespace-nowrap">
                    <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                      View
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

export default EngagementCampaigns;

