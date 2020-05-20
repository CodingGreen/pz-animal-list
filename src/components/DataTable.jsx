import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import Form from 'react-bootstrap/Form';
import { arrayFilterFn } from './ListColumnFilter';
import data from '../data/animals.json';
import columns from '../config/columnsConfig';
import './dataTable.css';

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
    <div className="m-4">
      <h2>Choose columns</h2>
      <Form className="columnSelection ml-3 mt-3">
        {allColumns.map((column) => (
          <Form.Check
            inline
            label={column.render('Header')}
            type="checkbox"
            id={`checkbox-${column.id}`}
            {...column.getToggleHiddenProps()}
            className="mr-3 mb-3"
            key={column.id}
          />
        ))}
      </Form>
      <h2>Animal List</h2>
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
                        {column.isSorted ? (column.isSortedDesc ? ' 🔼' : ' 🔽') : ''}
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
    </div>
  );
};

export default DataTable;
