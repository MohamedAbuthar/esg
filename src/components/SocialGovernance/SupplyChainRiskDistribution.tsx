import React from 'react';

interface RiskCard {
  label: string;
  value: string;
  percentage: string;
  badgeText: string;
  badgeColor: string;
}

const SupplyChainRiskDistribution: React.FC = () => {
  const riskData: RiskCard[] = [
    {
      label: 'High Risk',
      value: '23',
      percentage: '2.7% of supplier base',
      badgeText: 'Critical',
      badgeColor: 'bg-red-600',
    },
    {
      label: 'Medium Risk',
      value: '145',
      percentage: '17.1% of supplier base',
      badgeText: 'Monitor',
      badgeColor: 'bg-teal-600',
    },
    {
      label: 'Low Risk',
      value: '679',
      percentage: '80.2% of supplier base',
      badgeText: 'Compliant',
      badgeColor: 'bg-green-600',
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Supply Chain Risk Distribution
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {riskData.map((risk, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600">{risk.label}</p>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${risk.badgeColor}`}
              >
                {risk.badgeText}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {risk.value}
            </h3>
            <p className="text-sm text-gray-500">{risk.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyChainRiskDistribution;

