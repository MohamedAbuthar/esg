'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const CreateDataRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    suppliers: '',
    requestType: '',
    dueDate: '',
    reminderFrequency: '',
    additionalInstructions: '',
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
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Create Data Request</h2>
        <p className="text-sm text-gray-600">Send automated questionnaire to suppliers</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="space-y-5">
            <div>
              <Label htmlFor="suppliers" className="text-sm font-medium text-gray-700 mb-2 block">
                Select Supplier(s)
              </Label>
              <div className="relative">
                <select
                  id="suppliers"
                  name="suppliers"
                  value={formData.suppliers}
                  onChange={handleChange}
                  className="appearance-none w-full h-9 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Choose supplier</option>
                  <option value="techcomponents">TechComponents Inc</option>
                  <option value="globalmaterials">Global Materials Co</option>
                  <option value="pacificlogistics">Pacific Logistics</option>
                  <option value="europarts">EuroParts Manufacturing</option>
                  <option value="asiametals">Asia Metals Group</option>
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
              <Label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-2 block">
                Due Date
              </Label>
              <div className="relative">
                <Input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
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
              <Label htmlFor="additionalInstructions" className="text-sm font-medium text-gray-700 mb-2 block">
                Additional Instructions
              </Label>
              <textarea
                id="additionalInstructions"
                name="additionalInstructions"
                value={formData.additionalInstructions}
                onChange={handleChange}
                placeholder="Provide any specific guidance or requirements..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-y"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            <div>
              <Label htmlFor="requestType" className="text-sm font-medium text-gray-700 mb-2 block">
                Request Type
              </Label>
              <div className="relative">
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className="appearance-none w-full h-9 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="annual-emissions">Annual Emissions</option>
                  <option value="product-pcf">Product PCF</option>
                  <option value="energy-data">Energy Data</option>
                  <option value="compliance-data">Compliance Data</option>
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
              <Label htmlFor="reminderFrequency" className="text-sm font-medium text-gray-700 mb-2 block">
                Reminder Frequency
              </Label>
              <div className="relative">
                <select
                  id="reminderFrequency"
                  name="reminderFrequency"
                  value={formData.reminderFrequency}
                  onChange={handleChange}
                  className="appearance-none w-full h-9 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
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
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        >
          Send Data Request
        </Button>
      </form>
    </div>
  );
};

export default CreateDataRequest;

