'use client';

import React from 'react';

interface ImpactCard {
  title: string;
  description: string;
  value: string;
}

const BiodiversityImpactAssessment: React.FC = () => {
  const cards: ImpactCard[] = [
    {
      title: 'Ecosystem Services Value',
      description: 'Estimated annual value of ecosystem benefits',
      value: '$2.4M',
    },
    {
      title: 'Carbon Sequestration',
      description: 'Annual CO2 captured by protected areas',
      value: '1,450 tCO2e',
    },
    {
      title: 'Pollination Value',
      description: 'Economic value from pollinator habitats',
      value: '$185K',
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Biodiversity Impact Assessment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
              <div className="shrink-0">
                <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                  {card.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiodiversityImpactAssessment;

