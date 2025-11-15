'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  width?: 'auto' | 'full' | string;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
  activeBgColor?: string;
  inactiveBgColor?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  size = 'md',
  width = 'auto',
  className,
  activeColor,
  inactiveColor,
  activeBgColor,
  inactiveBgColor,
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const widthClasses = {
    auto: 'inline-flex',
    full: 'flex w-full',
  };

  const containerWidthClass =
    width === 'auto' || width === 'full' ? widthClasses[width] : width;

  const activeStyles = activeColor
    ? { color: activeColor }
    : {};
  const inactiveStyles = inactiveColor
    ? { color: inactiveColor }
    : {};
  const activeBgStyles = activeBgColor
    ? { backgroundColor: activeBgColor }
    : {};
  const inactiveBgStyles = inactiveBgColor
    ? { backgroundColor: inactiveBgColor }
    : {};

  return (
    <div
      className={cn(
        containerWidthClass,
        'bg-gray-100 rounded-lg p-1 mb-6',
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={cn(
            sizeClasses[size],
            'font-medium transition-all rounded-md',
            activeTab === tab.value
              ? !activeBgColor && !activeColor
                ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                : ''
              : !inactiveBgColor && !inactiveColor
              ? 'text-gray-500 hover:text-gray-700'
              : ''
          )}
          style={{
            ...(activeTab === tab.value
              ? { ...activeStyles, ...activeBgStyles }
              : { ...inactiveStyles, ...inactiveBgStyles }),
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

