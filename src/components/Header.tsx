'use client';

import React, { useState, useRef, useEffect } from 'react';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState('Global Enterprise Corp');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const organizations = [
    'Global Enterprise Corp',
    'North America Division',
    'Europe Division',
    'Asia Pacific Division',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleSelectOrganization = (org: string) => {
    setSelectedOrganization(org);
    setIsDropdownOpen(false);
  };

  const DocumentIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-600"
    >
      <path
        d="M5.83 2.5H14.17C15.17 2.5 16 3.33 16 4.33V15.67C16 16.67 15.17 17.5 14.17 17.5H5.83C4.83 17.5 4 16.67 4 15.67V4.33C4 3.33 4.83 2.5 5.83 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.67 6.67H13.33M6.67 10H13.33M6.67 13.33H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Company name with dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <DocumentIcon />
            <span className="text-base font-medium text-gray-900">{selectedOrganization}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900">Select Organization</h3>
              </div>
              <div className="py-2">
                {organizations.map((org) => (
                  <button
                    key={org}
                    onClick={() => handleSelectOrganization(org)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors ${
                      selectedOrganization === org ? 'bg-blue-50' : ''
                    }`}
                  >
                    <DocumentIcon />
                    <span className="text-sm font-medium text-gray-900">{org}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right side - Reporting period and avatar */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700">Reporting Period: FY 2024</span>
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

