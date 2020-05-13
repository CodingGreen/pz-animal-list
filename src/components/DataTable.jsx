import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import Form from 'react-bootstrap/Form';
import { arrayFilterFn } from './ListColumnFilter';
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
  } = useTable({ columns, data, filterTypes: { arrayFilterFn } }, useFilters, useSortBy);

  return (
    <>
      <Form>
        {allColumns.map((column) => (
          <div key={column.id}>
            <Form.Check
              inline
              label={column.id}
              type="checkbox"
              id={`checkbox-${column.id}`}
              {...column.getToggleHiddenProps()}
            />
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
                    {column.canSort ? (
                      <span {...column.getSortByToggleProps()}>
                        {column.render('Header')}
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                    ) : column.render('Header')}
                    {column.canFilter ? column.render('Filter') : null}
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
