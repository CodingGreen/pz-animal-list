import React from 'react';
import Form from 'react-bootstrap/Form';

function CheckboxList({ checkboxLabels, checkedLabels, onChange }) {
  return checkboxLabels.map((label) => (
    <Form.Check
      inline
      label={label}
      type="checkbox"
      id={`filter-checkbox-${label}`}
      key={`filter-checkbox-${label}`}
      checked={checkedLabels.includes(label)}
      onChange={() => onChange(checkedLabels.includes(label)
        ? checkedLabels.filter((checkedLabel) => checkedLabel !== label)
        : [...checkedLabels, label])}
    />
  ));
}

export default CheckboxList;
