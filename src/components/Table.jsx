import React from 'react';

export default function Table({ columns, data, renderActions }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg bg-white dark:bg-gray-900 mt-8">
      <table className="min-w-full text-gray-800 dark:text-gray-100">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            {columns.map(col => (
              <th key={col.key} className="px-6 py-3 text-left font-bold uppercase tracking-wider">{col.label}</th>
            ))}
            {renderActions && <th className="px-6 py-3">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-800 transition">
              {columns.map(col => (
                <td key={col.key} className="px-6 py-4">{row[col.key]}</td>
              ))}
              {renderActions && <td className="px-6 py-4">{renderActions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
