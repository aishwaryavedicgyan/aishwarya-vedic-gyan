import React from 'react';

type PanchangCardProps = {
  title: string;
  value: string;
};

export function PanchangCard({ title, value }: PanchangCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-1 text-lg font-semibold text-gray-900">{value}</p>
    </div>
  );
}