'use client';

import React from 'react';
import { Button } from '../ui/button';

interface Framework {
  name: string;
  dueDate: string;
  daysRemaining: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  total: number;
}

const ReportingFrameworks: React.FC = () => {
  const frameworks: Framework[] = [
    {
      name: 'CSRD/ESRS',
      dueDate: '2025-03-31',
      daysRemaining: -228,
      completed: 856,
      inProgress: 234,
      notStarted: 157,
      total: 1247,
    },
    {
      name: 'GRI Standards',
      dueDate: '2025-02-28',
      daysRemaining: -259,
      completed: 298,
      inProgress: 32,
      notStarted: 12,
      total: 342,
    },
    {
      name: 'SASB',
      dueDate: '2025-04-15',
      daysRemaining: -213,
      completed: 142,
      inProgress: 28,
      notStarted: 16,
      total: 186,
    },
    {
      name: 'TCFD',
      dueDate: '2025-01-31',
      daysRemaining: -287,
      completed: 67,
      inProgress: 15,
      notStarted: 7,
      total: 89,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  const calculateProgress = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="space-y-6">
      {frameworks.map((framework, index) => {
        const progress = calculateProgress(framework.completed, framework.total);
        const inProgressPercentage = Math.round((framework.inProgress / framework.total) * 100);
        const completedPercentage = Math.round((framework.completed / framework.total) * 100);

        return (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            {/* Title and Due Date */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{framework.name}</h3>
              <p className="text-sm text-gray-600">
                Due: {formatDate(framework.dueDate)} ({Math.abs(framework.daysRemaining)} days remaining)
              </p>
            </div>

            {/* Overall Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">{progress}% Complete</div>
                  <div className="text-sm text-gray-600">
                    {framework.completed} / {framework.total} questions
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex items-center">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${completedPercentage}%`, backgroundColor: '#0D9488' }}
                />
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${inProgressPercentage}%` }}
                />
                <div
                  className="h-full bg-gray-300 rounded-full"
                  style={{ width: `${100 - completedPercentage - inProgressPercentage}%` }}
                />
              </div>
            </div>

            {/* Status Breakdown */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1.5">{framework.completed}</div>
                <div className="text-sm font-medium text-gray-700">Completed</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1.5">{framework.inProgress}</div>
                <div className="text-sm font-medium text-gray-700">In Progress</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1.5">{framework.notStarted}</div>
                <div className="text-sm font-medium text-gray-700">Not Started</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                Continue Reporting
              </Button>
              <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400">
                View Answers
              </Button>
              <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400">
                Export Report
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReportingFrameworks;

