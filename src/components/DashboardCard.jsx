import React from 'react';

export default function DashboardCard({ icon, color, count, label }) {
  return (
    <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
      <div className={`text-3xl text-white ${color} rounded-full p-4`}>{icon}</div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-gray-400">{label}</span>
      </div>
    </div>
  );
}
