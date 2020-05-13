import React from 'react';
import Form from 'react-bootstrap/Form';
import CheckboxList from './CheckboxList';
import FilterMenu from './FilterMenu';

export function ListColumnFilter({
  column: {
    filterValue, setFilter, preFilteredRows, id,
  },
}) {
  const options = React.useMemo(() => {
    const optionsSet = new Set();
    preFilteredRows.forEach((row) => {
      row.values[id].forEach((value) => {
        optionsSet.add(value);
      });
    });
    return [...optionsSet.values()];
  }, [id, preFilteredRows]);

  return (
    <FilterMenu>
      <Form>
        <CheckboxList
          checkboxLabels={options}
          onChange={setFilter}
          checkedLabels={filterValue || []}
        />
      </Form>
    </FilterMenu>
  );
}

export function arrayFilterFn(rows, ids, filterValue) {
  return rows.filter(
    (row) => ids.some(
      (id) => row.values[id].some(
        (value) => filterValue.includes(value),
      ),
    ),
  );
}

arrayFilterFn.autoRemove = (val) => val.length === 0;
