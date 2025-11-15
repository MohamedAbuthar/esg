'use client';

import React from 'react';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface Project {
  projectName: string;
  location: string;
  area: number;
  species: number;
  progress: number;
  status: 'Active' | 'Complete' | 'Planning';
}

const BiodiversityRestorationProjects: React.FC = () => {
  const data: Project[] = [
    {
      projectName: 'Wetland Restoration',
      location: 'Site A - Manufacturing',
      area: 45,
      species: 12,
      progress: 65,
      status: 'Active',
    },
    {
      projectName: 'Native Tree Planting',
      location: 'Site B - Distribution',
      area: 38,
      species: 8,
      progress: 82,
      status: 'Active',
    },
    {
      projectName: 'Pollinator Garden',
      location: 'HQ Campus',
      area: 12,
      species: 15,
      progress: 100,
      status: 'Complete',
    },
    {
      projectName: 'River Bank Stabilization',
      location: 'Site C - Logistics',
      area: 25,
      species: 6,
      progress: 15,
      status: 'Planning',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700';
      case 'Complete':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-600 text-white';
      case 'Planning':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white';
      default:
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      {/* Header with Title and New Project Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Biodiversity Restoration Projects
        </h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          New Project
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Project Name
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Location
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Area (ha)
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Species
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
              Progress
            </TableHead>
            <TableHead className="font-semibold text-gray-900 whitespace-nowrap px-4 py-3">
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
              <TableCell className="text-gray-900 font-medium whitespace-nowrap px-4 py-3">
                {row.projectName}
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap px-4 py-3">
                {row.location}
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap px-4 py-3">
                {row.area}
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap px-4 py-3">
                {row.species}
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-[100px] max-w-[200px]">
                    <div className="w-full h-3 bg-green-100 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-teal-600"
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 min-w-[45px]">
                    {row.progress}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap px-4 py-3">
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

export default BiodiversityRestorationProjects;

