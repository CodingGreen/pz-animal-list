import React from 'react';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import { GrFilter } from 'react-icons/gr';
import Popover from 'react-bootstrap/Popover';
import CheckboxList from './CheckboxList';

// This is a custom filter UI for selecting
// a unique option from a list
export function ListColumnFilter({
  column: {
    filterValue, setFilter, preFilteredRows, id,
  },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const optionsSet = new Set();
    preFilteredRows.forEach((row) => {
      row.values[id].forEach((value) => {
        optionsSet.add(value);
      });
    });
    return [...optionsSet.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  const menu = (
    <Popover id="select-column-filter">
      <Popover.Title as="h3">Filter</Popover.Title>
      <Popover.Content>
        <Form>
          <CheckboxList
            checkboxLabels={options}
            onChange={setFilter}
            checkedLabels={filterValue || []}
          />
        </Form>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={menu}
    >
      <Button variant="light"><GrFilter /></Button>
    </OverlayTrigger>
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

// Let the table remove the filter if the string is empty
arrayFilterFn.autoRemove = (val) => val.length === 0;
