'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const LaunchNewCampaign: React.FC = () => {
  const [formData, setFormData] = useState({
    campaignName: '',
    campaignType: '',
    targetSuppliers: '50',
    responseDeadline: '',
    campaignMessage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Launch New Campaign</h2>
        <p className="text-sm text-gray-600">Create automated supplier engagement workflow</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="campaignName" className="text-sm font-medium text-gray-700 mb-2 block">
            Campaign Name
          </Label>
          <Input
            id="campaignName"
            name="campaignName"
            type="text"
            placeholder="e.g., Q3 2024 Data Collection"
            value={formData.campaignName}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="campaignType" className="text-sm font-medium text-gray-700 mb-2 block">
            Campaign Type
          </Label>
          <div className="relative">
            <select
              id="campaignType"
              name="campaignType"
              value={formData.campaignType}
              onChange={handleChange}
              className="appearance-none w-full h-9 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select type</option>
              <option value="emissions-data-request">Emissions Data Request</option>
              <option value="sbti-commitment">SBTi Commitment</option>
              <option value="product-carbon-footprint">Product Carbon Footprint</option>
              <option value="energy-renewables">Energy & Renewables</option>
              <option value="general-survey">General Survey</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div>
          <Label htmlFor="targetSuppliers" className="text-sm font-medium text-gray-700 mb-2 block">
            Target Suppliers
          </Label>
          <Input
            id="targetSuppliers"
            name="targetSuppliers"
            type="number"
            value={formData.targetSuppliers}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="responseDeadline" className="text-sm font-medium text-gray-700 mb-2 block">
            Response Deadline
          </Label>
          <div className="relative">
            <Input
              id="responseDeadline"
              name="responseDeadline"
              type="date"
              value={formData.responseDeadline}
              onChange={handleChange}
              className="w-full pr-10"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <div>
          <Label htmlFor="campaignMessage" className="text-sm font-medium text-gray-700 mb-2 block">
            Campaign Message
          </Label>
          <textarea
            id="campaignMessage"
            name="campaignMessage"
            value={formData.campaignMessage}
            onChange={handleChange}
            placeholder="Dear valued supplier, we are reaching out to collect your emissions data..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-y"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        >
          Launch Campaign
        </Button>
      </form>
    </div>
  );
};

export default LaunchNewCampaign;

