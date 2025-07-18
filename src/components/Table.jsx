import React from 'react';

export default function Table({ columns, data, renderActions }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg bg-[var(--background)] mt-8">
      <table className="min-w-full text-[var(--text-primary)]">
        <thead>
          <tr className="bg-[var(--accent)] text-[var(--text-white)]">
            `{columns.map(col => (
              <th key={col.key} className="px-6 py-3 text-left font-bold uppercase tracking-wider">{col.label}</th>
            ))}
            {renderActions && <th className="px-6 py-3">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-[var(--accent-teal)] hover:bg-[var(--hover-bg)] transition">
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
