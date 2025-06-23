'use client';
export default function Table({ columns, data, renderActions }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">{col.label}</th>
            ))}
            {renderActions && <th className="px-4 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
              {columns.map(col => (
                <td key={col.key} className="px-4 py-2 text-gray-700 dark:text-gray-200">{row[col.key]}</td>
              ))}
              {renderActions && <td className="px-4 py-2">{renderActions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
