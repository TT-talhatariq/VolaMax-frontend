'use client';

import React from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

function DataTable<T extends Record<string, any>>({
  columns,
  data,
  onRowClick,
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 ${
                    column.className || ''
                  }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick?.(row)}
                className={`${onRowClick ? 'cursor-pointer' : ''} hover:bg-gray-50`}
              >
                {columns.map((column, colIndex) => {
                  const cellValue =
                    typeof column.accessor === 'function'
                      ? column.accessor(row)
                      : row[column.accessor];
                  
                  const isNameColumn = column.accessor === 'name';
                  
                  return (
                    <td
                      key={colIndex}
                      className={`px-6 py-4 text-sm ${
                        isNameColumn
                          ? 'whitespace-nowrap text-gray-900'
                          : 'whitespace-nowrap text-gray-600'
                      } ${column.className || ''}`}
                    >
                      {cellValue}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;

