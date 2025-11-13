import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  unit?: string;
  change?: string;
  changeType?: 'positive' | 'negative';
  subtitle?: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  unit,
  change,
  changeType,
  subtitle,
  icon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
          <div className="flex items-baseline gap-1 mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            {unit && (
              <span className="text-sm font-medium text-gray-600">{unit}</span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          )}
          {change && (
            <p
              className={`text-sm font-medium ${
                changeType === 'positive'
                  ? 'text-green-600'
                  : changeType === 'negative'
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

