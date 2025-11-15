'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const LogWasteGeneration: React.FC = () => {
  const [formData, setFormData] = useState({
    site: '',
    wasteType: '',
    amount: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleCancel = () => {
    setFormData({
      site: '',
      wasteType: '',
      amount: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Log Waste Generation
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Site Dropdown */}
          <div>
            <Label htmlFor="site" className="text-sm font-medium text-gray-700 mb-2 block">
              Site
            </Label>
            <div className="relative">
              <select
                id="site"
                name="site"
                value={formData.site}
                onChange={handleChange}
                className="appearance-none w-full h-9 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select site</option>
                <option value="site1">Site 1</option>
                <option value="site2">Site 2</option>
                <option value="site3">Site 3</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Waste Type Dropdown */}
          <div>
            <Label htmlFor="wasteType" className="text-sm font-medium text-gray-700 mb-2 block">
              Waste Type
            </Label>
            <div className="relative">
              <select
                id="wasteType"
                name="wasteType"
                value={formData.wasteType}
                onChange={handleChange}
                className="appearance-none w-full h-9 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select type</option>
                <option value="recyclables">Recyclables</option>
                <option value="organic">Organic/Compost</option>
                <option value="landfill">Landfill</option>
                <option value="incineration">Incineration</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Amount Input */}
          <div>
            <Label htmlFor="amount" className="text-sm font-medium text-gray-700 mb-2 block">
              Amount (tons)
            </Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Submit Entry
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogWasteGeneration;

