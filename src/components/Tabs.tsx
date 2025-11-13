'use client';

import React from 'react';

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex gap-1 border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`
            px-6 py-3 text-sm font-medium transition-colors relative
            ${
              activeTab === tab.value
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

