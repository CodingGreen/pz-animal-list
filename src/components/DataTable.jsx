import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import Form from 'react-bootstrap/Form';
import data from '../data/animals.json';
import columns from '../config/columnsConfig';

const DataTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    allColumns,
    prepareRow,
  } = useTable({ columns, data }, useFilters, useSortBy);

  return (
    <>
      <Form>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <Form.Check
                inline
                label={column.id}
                type="checkbox"
                id="Checkbox"
                {...column.getToggleHiddenProps()}
              />
            </label>
          </div>
        ))}
      </Form>
      <div style={{ overflowX: 'auto' }}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    <span {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
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
      </div>
    </>
  );
};

export default DataTable;
