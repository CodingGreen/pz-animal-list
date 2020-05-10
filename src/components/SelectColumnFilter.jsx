import React from 'react';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import { GrFilter } from 'react-icons/gr';
import Popover from 'react-bootstrap/Popover';

const optionMap = {
  true: '✅ - Yes',
  false: '❌ - No',
};

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: {
    filterValue, setFilter, preFilteredRows, id,
  },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const optionsSet = new Set();
    preFilteredRows.forEach((row) => {
      optionsSet.add(row.values[id]);
    });
    return [...optionsSet.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  const menu = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Filter</Popover.Title>
      <Popover.Content>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Filter</Form.Label>
            <Form.Control
              as="select"
              value={filterValue}
              onChange={(e) => {
                if (e.target.value === 'true') {
                  setFilter(true);
                } else if (e.target.value === 'false') {
                  setFilter(false);
                } else {
                  setFilter(e.target.value || undefined);
                }
              }}
            >
              <option value="">All</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {optionMap[option]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
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

export default SelectColumnFilter;
