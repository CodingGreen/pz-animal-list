import React from 'react';
import { useTable, useSortBy } from 'react-table';
import data from '../data/animals.json';

const columns = [
  {
    Header: 'Name',
    id: 'name',
    accessor: (row) => (
      <a href={row.wikiLink}>{row.name}</a>
    ),
  },
  {
    Header: 'Fence Grade',
    accessor: 'fenceGrade',
  },
  {
    Header: 'Land Area (m²)',
    accessor: 'landArea',
  },
];

const DataTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...{ ...column.getHeaderProps(), ...column.getSortByToggleProps() }}>
                {column.render('Header')}
                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
