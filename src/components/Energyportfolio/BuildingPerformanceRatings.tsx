'use client';

import React from 'react';
import { Button } from '../ui/button';

interface BuildingRating {
  name: string;
  status: 'Certified' | 'In Progress';
  energyStar: number;
  nabersRating: number;
  euiCurrent: number;
  euiTarget: number;
  performanceGap: number;
}

const BuildingPerformanceRatings: React.FC = () => {
  const buildings: BuildingRating[] = [
    {
      name: 'HQ - New York',
      status: 'Certified',
      energyStar: 87,
      nabersRating: 4.5,
      euiCurrent: 142,
      euiTarget: 130,
      performanceGap: 9.2,
    },
    {
      name: 'Office - London',
      status: 'Certified',
      energyStar: 92,
      nabersRating: 5,
      euiCurrent: 118,
      euiTarget: 125,
      performanceGap: -5.6,
    },
    {
      name: 'Manufacturing - Texas',
      status: 'In Progress',
      energyStar: 68,
      nabersRating: 3.5,
      euiCurrent: 285,
      euiTarget: 260,
      performanceGap: 9.6,
    },
    {
      name: 'Distribution - California',
      status: 'Certified',
      energyStar: 75,
      nabersRating: 4,
      euiCurrent: 198,
      euiTarget: 185,
      performanceGap: 7.0,
    },
    {
      name: 'R&D - Berlin',
      status: 'Certified',
      energyStar: 84,
      nabersRating: 4.5,
      euiCurrent: 156,
      euiTarget: 145,
      performanceGap: 7.6,
    },
  ];

  const getPerformanceGapColor = (gap: number) => {
    return gap > 0 ? 'text-orange-600' : 'text-green-600';
  };


  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Building Performance Ratings
        </h2>
        <p className="text-sm text-gray-600">
          ENERGY STAR scores and NABERS ratings across your portfolio
        </p>
      </div>

      <div className="space-y-6">
        {buildings.map((building, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-600"
                    >
                      <path
                        d="M3 21H21M5 21V7L12 2L19 7V21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 21V13H15V21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {building.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        building.status === 'Certified'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {building.status}
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="bg-gray-50 border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Update Rating
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500"
                    >
                      <path
                        d="M8 1.33L9.73 5.33L14 6L10.67 9L11.33 13.33L8 11.33L4.67 13.33L5.33 9L2 6L6.27 5.33L8 1.33Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-600">
                      ENERGY STAR
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {building.energyStar}
                    </span>
                    <span className="text-sm text-gray-600 ml-1">/100</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${building.energyStar}%` }}
                    />
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${100 - building.energyStar}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500"
                    >
                      <path
                        d="M8 1.33L9.73 5.33L14 6L10.67 9L11.33 13.33L8 11.33L4.67 13.33L5.33 9L2 6L6.27 5.33L8 1.33Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-600">
                      NABERS Rating
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {building.nabersRating}
                    </span>
                    <span className="text-sm text-gray-600 ml-1">/6.0</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${(building.nabersRating / 6.0) * 100}%` }}
                    />
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${100 - (building.nabersRating / 6.0) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500"
                    >
                      <path
                        d="M8 1.33L9.73 5.33L14 6L10.67 9L11.33 13.33L8 11.33L4.67 13.33L5.33 9L2 6L6.27 5.33L8 1.33Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-600">
                      EUI (Current)
                    </span>
                  </div>
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-gray-900">
                      {building.euiCurrent}
                    </span>
                    <span className="text-sm text-gray-600 ml-1">
                      kWh/m²/yr
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Target: {building.euiTarget}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500"
                    >
                      <path
                        d="M8 2.67L3 10H8L7 14L13 6H8L8 2.67Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-600">
                      Performance Gap
                    </span>
                  </div>
                  <div className="mb-1">
                    <span
                      className={`text-2xl font-bold ${getPerformanceGapColor(
                        building.performanceGap
                      )}`}
                    >
                      {building.performanceGap > 0 ? '+' : ''}
                      {building.performanceGap}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {building.performanceGap > 0
                      ? 'Above target'
                      : 'Below target'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rating Integration Section */}
      <div className="mt-6 bg-white rounded-lg shadow-sm p-6 border border-blue-200">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600"
            >
              <path
                d="M3 18L7 14L11 16L15 10L19 12L21 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Rating Integration
            </h3>
            <p className="text-sm text-gray-600">
              Connect to ENERGY STAR Portfolio Manager and NABERS to automatically sync building performance data, certifications, and ratings.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
          >
            Connect ENERGY STAR
          </Button>
          <Button
            variant="outline"
            className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold"
          >
            Connect NABERS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuildingPerformanceRatings;

