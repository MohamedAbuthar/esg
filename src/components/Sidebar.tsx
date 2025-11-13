'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path?: string;
  active?: boolean;
  highlighted?: boolean;
  bold?: boolean;
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  // Scrollable navigation items
  const scrollableNavItems: NavItem[] = [
    {
      label: 'Dashboard',
      path: '/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 2.5H8.33V8.33H2.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.67 2.5H17.5V8.33H11.67V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.5 11.67H8.33V17.5H2.5V11.67Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.67 11.67H17.5V17.5H11.67V11.67Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Emissions (Scope 1 & 2)',
      path: '/emissions-scope-1-2',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2.5C13.33 2.5 16.25 4.17 17.5 6.67M10 2.5C6.67 2.5 3.75 4.17 2.5 6.67M10 17.5C6.67 17.5 3.75 15.83 2.5 13.33M10 17.5C13.33 17.5 16.25 15.83 17.5 13.33M2.5 6.67C2.5 8.33 3.33 9.75 4.58 10.5M15.42 9.5C16.67 8.75 17.5 7.33 17.5 5.67M17.5 13.33C17.5 11.67 16.67 10.25 15.42 9.5M4.58 10.5C3.33 11.25 2.5 12.67 2.5 14.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Supply Chain (Scope 3)',
      path: '/supply-chain',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 5.83L10 2.5L17.5 5.83V10C17.5 14.17 13.33 17.5 10 17.5C6.67 17.5 2.5 14.17 2.5 10V5.83Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 10L9.17 11.67L12.5 8.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Supply Chain Intelligence',
      path: '/supply-chain-intelligence',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 15L6.67 10L10 13.33L13.33 8.33L17.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Targets & Performance',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="10" r="4.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="10" r="0.83" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: 'ESG Reporting',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.83 2.5H14.17C15.17 2.5 16 3.33 16 4.33V15.67C16 16.67 15.17 17.5 14.17 17.5H5.83C4.83 17.5 4 16.67 4 15.67V4.33C4 3.33 4.83 2.5 5.83 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.67 6.67H13.33M6.67 10H13.33M6.67 13.33H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 13.33L14.17 15L17.5 11.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Sites & Assets',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33 17.5H16.67V8.33H3.33V17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33 17.5V10.83H11.67V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33 8.33L10 2.5L16.67 8.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Energy Portfolio',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.67 2.5L8.33 10H13.33L8.33 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Environmental (Water/Waste)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2.5C7.5 5.83 5.83 8.33 5.83 10C5.83 12.5 7.5 14.17 10 14.17C12.5 14.17 14.17 12.5 14.17 10C14.17 8.33 12.5 5.83 10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 10C10.92 10 11.67 9.25 11.67 8.33C11.67 7.42 10.92 6.67 10 6.67C9.08 6.67 8.33 7.42 8.33 8.33C8.33 9.25 9.08 10 10 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 12.5L5.83 15.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Social & Governance',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2.5L4.17 5.83V10C4.17 13.33 6.67 16.25 10 17.08C13.33 16.25 15.83 13.33 15.83 10V5.83L10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 10L7.5 8.33L10 6.67L12.5 8.33L10 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Data Capture (Bills/Meters)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33 3.33H16.67V6.67H3.33V3.33Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33 8.33H16.67V11.67H3.33V8.33Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33 13.33H16.67V16.67H3.33V13.33Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Financial Integration',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.83 7.5C5.83 6.12 7.08 5 8.5 5H11.5C12.92 5 14.17 6.12 14.17 7.5C14.17 8.88 12.92 10 11.5 10H8.5C7.08 10 5.83 11.12 5.83 12.5C5.83 13.88 7.08 15 8.5 15H11.5C12.92 15 14.17 13.88 14.17 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Compliance & Frameworks',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 5.83L10 2.5L15 5.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 14.17L10 17.5L15 14.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 5.83V14.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 5.83V14.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Decarbonization Planning',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5C12.5 5 14.5 7 14.5 9.5C14.5 12 12.5 14 10 14C7.5 14 5.5 12 5.5 9.5C5.5 7 7.5 5 10 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 14L12.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12.5" cy="17.5" r="1.5" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: 'Energy & Renewables',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8.33C5 7.5 5.42 6.75 6.08 6.33C6.75 5.92 7.58 5.83 8.33 6.08C9.08 6.33 9.67 6.92 10 7.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 11.67C15 12.5 14.58 13.25 13.92 13.67C13.25 14.08 12.42 14.17 11.67 13.92C10.92 13.67 10.33 13.08 10 12.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33 5L11.67 10L8.33 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Product & Lifecycle',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33 5.83H16.67V14.17H3.33V5.83Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.67 5.83V3.33C6.67 2.92 7.08 2.5 7.5 2.5H12.5C12.92 2.5 13.33 2.92 13.33 3.33V5.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 5.83V14.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Collaboration & Workflow',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C11.38 10 12.5 8.88 12.5 7.5C12.5 6.12 11.38 5 10 5C8.62 5 7.5 6.12 7.5 7.5C7.5 8.88 8.62 10 10 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 15C15 12.5 12.5 10 10 10C7.5 10 5 12.5 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 7.5C15 8.88 16.12 10 17.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 15C17.5 13.62 16.38 12.5 15 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      highlighted: true,
    },
    {
      label: 'Data Quality',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 10L9.17 11.67L12.5 8.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Emission Factors Library',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5.83C5 5.37 5.37 5 5.83 5H14.17C14.63 5 15 5.37 15 5.83V14.17C15 14.63 14.63 15 14.17 15H5.83C5.37 15 5 14.63 5 14.17V5.83Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33 7.5H16.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33 10H16.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33 12.5H16.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Analytics',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33 15H6.67V10H3.33V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33 15H11.67V7.5H8.33V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.33 15H16.67V5H13.33V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'vs IBM Envizi',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 15L6.67 10L10 13.33L13.33 8.33L17.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.5 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  // Sticky navigation items (bottom)
  const stickyNavItems: NavItem[] = [
    {
      label: 'Suppliers Portal',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C11.38 10 12.5 8.88 12.5 7.5C12.5 6.12 11.38 5 10 5C8.62 5 7.5 6.12 7.5 7.5C7.5 8.88 8.62 10 10 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 15C15 12.5 12.5 10 10 10C7.5 10 5 12.5 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 7.5C15 8.88 16.12 10 17.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 15C17.5 13.62 16.38 12.5 15 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      highlighted: true,
      bold: true,
    },
    {
      label: 'Settings',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12.5C11.38 12.5 12.5 11.38 12.5 10C12.5 8.62 11.38 7.5 10 7.5C8.62 7.5 7.5 8.62 7.5 10C7.5 11.38 8.62 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.83 12.5C15.75 12.75 15.67 13 15.58 13.25L17.5 15.17C17.75 15.42 17.83 15.83 17.67 16.17L16.67 18.33C16.5 18.67 16.17 18.83 15.83 18.75L13.5 18.17C13.17 18.42 12.83 18.58 12.5 18.67L12.17 16.67C12.17 17.08 11.83 17.33 11.42 17.33H8.58C8.17 17.33 7.83 17.08 7.83 16.67L7.5 18.67C7.17 18.58 6.83 18.42 6.5 18.17L4.17 18.75C3.83 18.83 3.5 18.67 3.33 18.33L2.33 16.17C2.17 15.83 2.25 15.42 2.5 15.17L4.42 13.25C4.33 13 4.25 12.75 4.17 12.5L2.5 11.17C2.25 10.92 2.17 10.5 2.33 10.17L3.33 8C3.5 7.67 3.83 7.5 4.17 7.58L6.5 7C6.83 6.75 7.17 6.58 7.5 6.5L7.83 3.33C7.83 2.92 8.17 2.67 8.58 2.67H11.42C11.83 2.67 12.17 2.92 12.17 3.33L12.5 6.5C12.83 6.58 13.17 6.75 13.5 7L15.83 7.58C16.17 7.5 16.5 7.67 16.67 8L17.67 10.17C17.83 10.5 17.75 10.92 17.5 11.17L15.83 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const renderNavItem = (item: NavItem, index: number) => {
    const isActive = item.path ? pathname === item.path : item.active;
    const href = item.path || '#';
    
    const content = (
      <div
        className={`
          flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors
          ${
            isActive
              ? 'bg-[#007BFF] text-white'
              : item.highlighted
              ? 'bg-[#2D3748] text-white'
              : 'text-gray-300 hover:bg-[#2D3748] hover:text-white'
          }
          ${item.bold ? 'font-bold' : 'font-medium'}
        `}
      >
        <span className="flex-shrink-0">{item.icon}</span>
        <span className="flex-1">{item.label}</span>
      </div>
    );

    return (
      <li key={index}>
        {item.path ? (
          <Link href={href}>{content}</Link>
        ) : (
          <a href={href}>{content}</a>
        )}
      </li>
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1A202C] text-white flex flex-col sidebar-scrollbar">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-700 flex-shrink-0">
        <h1 className="text-xl font-bold text-white">ESG Platform</h1>
      </div>

      {/* Scrollable Navigation Items */}
      <nav className="flex-1 px-4 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {scrollableNavItems.map((item, index) => renderNavItem(item, index))}
        </ul>
      </nav>

      {/* Sticky Navigation Items (Bottom) */}
      <nav className="px-4 py-4 border-t border-gray-700 flex-shrink-0">
        <ul className="space-y-1">
          {stickyNavItems.map((item, index) => renderNavItem(item, index))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
