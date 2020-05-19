import React from 'react';
import Form from 'react-bootstrap/Form';
import FilterMenu from './FilterMenu';

const optionMap = {
  true: '✅ - Yes',
  false: '❌ - No',
};

function SelectColumnFilter({
  column: {
    filterValue, setFilter, preFilteredRows, id,
  },
}) {
  const options = React.useMemo(() => {
    const optionsSet = new Set();
    preFilteredRows.forEach((row) => {
      optionsSet.add(row.values[id]);
    });
    return [...optionsSet.values()];
  }, [id, preFilteredRows]);

  return (
    <FilterMenu>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Show Values</Form.Label>
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
    </FilterMenu>
  );
}

export default SelectColumnFilter;
