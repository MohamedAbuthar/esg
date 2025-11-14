'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const GlobalPortfolio: React.FC = () => {
  const [mapboxToken, setMapboxToken] = useState('');

  const handleLoadMap = () => {
    // Handle map loading
  };

  return (
    <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-300'>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Global Portfolio</h2>
        <p className="text-sm text-gray-600">Interactive map of all facilities worldwide</p>
      </div>

      {/* Mapbox Token Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300">
        <div className="text-center mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-2">Mapbox Token Required</h3>
          <p className="text-sm text-gray-600">
            Enter your Mapbox public token to view the interactive site map. Get your token from{' '}
            <a
              href="https://mapbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              mapbox.com
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <Input
            type="text"
            placeholder="pk.eyJ1..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={handleLoadMap}
            className="bg-teal-600 hover:bg-teal-700 text-white whitespace-nowrap"
          >
            Load Map
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GlobalPortfolio;

