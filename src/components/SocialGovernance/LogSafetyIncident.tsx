'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

const LogSafetyIncident: React.FC = () => {
  const [formData, setFormData] = useState({
    site: '',
    incidentType: '',
    severity: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      site: '',
      incidentType: '',
      severity: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Log Safety Incident
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
                <option value="site4">Site 4</option>
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

          {/* Incident Type Dropdown */}
          <div>
            <Label htmlFor="incidentType" className="text-sm font-medium text-gray-700 mb-2 block">
              Incident Type
            </Label>
            <div className="relative">
              <select
                id="incidentType"
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
                className="appearance-none w-full h-9 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select type</option>
                <option value="injury">Injury</option>
                <option value="near-miss">Near Miss</option>
                <option value="property-damage">Property Damage</option>
                <option value="environmental">Environmental</option>
                <option value="other">Other</option>
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

          {/* Severity Dropdown */}
          <div>
            <Label htmlFor="severity" className="text-sm font-medium text-gray-700 mb-2 block">
              Severity
            </Label>
            <div className="relative">
              <select
                id="severity"
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className="appearance-none w-full h-9 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select severity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
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
            Submit Incident
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogSafetyIncident;

