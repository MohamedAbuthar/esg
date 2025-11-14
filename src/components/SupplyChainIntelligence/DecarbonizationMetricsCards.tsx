'use client';

import React from 'react';
import { Card } from '../ui/card';

interface Metric {
  label: string;
  value: string;
  isGreen?: boolean;
}

interface MetricCard {
  title: string;
  metrics: Metric[];
}

const DecarbonizationMetricsCards: React.FC = () => {
  const cards: MetricCard[] = [
    {
      title: 'Reduction Performance',
      metrics: [
        { label: 'Total Reduction', value: '-15.4%', isGreen: true },
        { label: 'Baseline (2020)', value: '65,000 tCO₂e' },
        { label: 'Current (2024)', value: '55,000 tCO₂e' },
        { label: 'Target (2030)', value: '32,500 tCO₂e' },
      ],
    },
    {
      title: 'Supplier Initiatives',
      metrics: [
        { label: 'Active Reduction Projects', value: '18' },
        { label: 'Renewable Energy Adoption', value: '42%', isGreen: true },
        { label: 'Energy Efficiency Improvements', value: '28%' },
        { label: 'SBTi Commitments', value: '3 suppliers' },
      ],
    },
    {
      title: 'Collaboration Programs',
      metrics: [
        { label: 'Joint Reduction Projects', value: '6' },
        { label: 'Capacity Building Programs', value: '4' },
        { label: 'Financial Support Provided', value: '$250K' },
        { label: 'Technical Assistance', value: '12 suppliers' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, cardIndex) => (
        <Card key={cardIndex} className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {card.title}
            </h3>
          </div>
          <div className="space-y-4">
            {card.metrics.map((metric, metricIndex) => (
              <div
                key={metricIndex}
                className="flex items-center justify-between"
              >
                <span className="text-sm font-medium text-gray-700">
                  {metric.label}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    metric.isGreen ? 'text-green-600' : 'text-gray-900'
                  }`}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DecarbonizationMetricsCards;

