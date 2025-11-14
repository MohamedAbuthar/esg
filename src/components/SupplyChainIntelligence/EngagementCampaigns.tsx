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

interface Campaign {
  campaignId: string;
  name: string;
  launched: string;
  targetSuppliers: number;
  contacted: number;
  responded: number;
  submitted: number;
  responseRate: number;
  deadline: string;
  status: 'Active' | 'Completed';
}

const EngagementCampaigns: React.FC = () => {
  const campaigns: Campaign[] = [
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Engagement Campaigns</h2>
        <p className="text-sm text-gray-600">Track supplier engagement initiatives and response rates.</p>
      </div>
      
      <div className="overflow-x-auto -mx-6 px-6">
        <div className="min-w-full inline-block align-middle">
          <Table className="min-w-[1200px]">
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Campaign ID</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Name</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Launched</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap">Target Suppliers</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap">Contacted</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap">Responded</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap">Submitted</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Response Rate</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Deadline</TableHead>
                <TableHead className="font-semibold text-gray-900 whitespace-nowrap">Status</TableHead>
                <TableHead className="font-semibold text-gray-900 text-right whitespace-nowrap">Actions</TableHead>
              </TableRow>
            </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.campaignId} className="border-b border-gray-200">
                <TableCell className="text-gray-900 whitespace-nowrap">{campaign.campaignId}</TableCell>
                <TableCell className="text-gray-900 whitespace-nowrap">{campaign.name}</TableCell>
                <TableCell className="text-gray-900 whitespace-nowrap">{formatDate(campaign.launched)}</TableCell>
                <TableCell className="text-gray-900 text-right whitespace-nowrap">{campaign.targetSuppliers}</TableCell>
                <TableCell className="text-gray-900 text-right whitespace-nowrap">{campaign.contacted}</TableCell>
                <TableCell className="text-gray-900 text-right whitespace-nowrap">{campaign.responded}</TableCell>
                <TableCell className="text-gray-900 text-right font-bold whitespace-nowrap">{campaign.submitted}</TableCell>
                <TableCell className="whitespace-nowrap">
                  <div className="flex items-center gap-2 min-w-[120px]">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden flex">
                      <div 
                        className="h-full rounded-full" 
                        style={{ width: `${campaign.responseRate}%`, backgroundColor: '#0D9488' }}
                      ></div>
                      <div 
                        className="h-full bg-green-500 rounded-full" 
                        style={{ width: `${100 - campaign.responseRate}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 whitespace-nowrap">{campaign.responseRate}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 whitespace-nowrap">{formatDate(campaign.deadline)}</TableCell>
                <TableCell className="whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {campaign.status}
                  </span>
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
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

