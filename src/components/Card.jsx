'use client';
import React from 'react';
export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex items-center gap-4">
      <div className="text-3xl text-blue-600 dark:text-blue-400">{icon}</div>
      <div>
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
      </div>
    </div>
  );
}
