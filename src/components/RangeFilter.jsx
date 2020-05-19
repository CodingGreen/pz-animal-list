import React from 'react';
import Range from 'rc-slider/lib/Range';
import createSliderWithTooltip from 'rc-slider/lib/createSliderWithTooltip';
import 'rc-slider/assets/index.css';
import FilterMenu from './FilterMenu';

const RangeWithTooltip = createSliderWithTooltip(Range);
function getNumberOfDecimals(value) {
  if (Math.floor(value) === value) return 0;
  return value.toString().split('.')[1].length || 0;
}

function SelectColumnFilter({
  column: {
    filterValue, setFilter, preFilteredRows, id,
  },
}) {
  const [min, max, step] = React.useMemo(() => {
    const values = preFilteredRows.map((row) => row.values[id]);
    const maxDecimals = values.reduce((accumulator, value) => {
      const decimals = getNumberOfDecimals(value);
      if (decimals > accumulator) {
        return decimals;
      }
      return accumulator;
    }, 0);
    return [Math.min(...values), Math.max(...values), (1 / (10 ** maxDecimals))];
  }, [id, preFilteredRows]);

  return (
    <FilterMenu>
      <label>Select a number range to filter by</label>
      <RangeWithTooltip
        allowCross={false}
        min={min}
        max={max}
        step={step}
        defaultValue={[min, max]}
        value={filterValue}
        onChange={setFilter}
      />
    </FilterMenu>
  );
}

export default SelectColumnFilter;
