'use client';

import React from 'react';

interface QuickAction {
  label: string;
  icon: React.ReactNode;
}

const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      label: 'Add New Framework',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.83 2.5H14.17C15.17 2.5 16 3.33 16 4.33V15.67C16 16.67 15.17 17.5 14.17 17.5H5.83C4.83 17.5 4 16.67 4 15.67V4.33C4 3.33 4.83 2.5 5.83 2.5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.67 6.67H13.33M6.67 10H13.33M6.67 13.33H10" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="13.33" cy="4.17" r="1.67" fill="#3B82F6" stroke="white" strokeWidth="1"/>
          <path d="M13.33 3.33V5M12.5 4.17H14.17" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: 'Review Pending Answers',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 5V10L13.33 11.67" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="10" r="3.33" fill="#10B981" stroke="white" strokeWidth="1"/>
          <path d="M8.33 10L9.58 11.25L11.67 9.17" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'View Audit Trail',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 5V10L13.33 11.67" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center">
                {action.icon}
              </div>
              <span className="text-sm font-medium text-gray-900">{action.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

