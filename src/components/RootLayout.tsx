'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default RootLayout;

