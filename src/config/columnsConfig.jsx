import React from 'react';
import SelectColumnFilter from '../components/SelectColumnFilter';
import RangeFilter from '../components/RangeFilter';
import { ListColumnFilter } from '../components/ListColumnFilter';

export default [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ row: { original: { wikiLink, name } } }) => (
      <a href={wikiLink} target="_blank" rel="noopener noreferrer">{name}</a>
    ),
    disableFilters: true,
  },
  {
    Header: 'Continents',
    accessor: 'continents',
    Cell: ({ value }) => value.join(', '),
    Filter: ListColumnFilter,
    filter: 'arrayFilterFn',
  },
  {
    Header: 'Biomes',
    accessor: 'biomes',
    Cell: ({ value }) => value.join(', '),
    Filter: ListColumnFilter,
    filter: 'arrayFilterFn',
  },
  {
    Header: 'Habitat',
    columns: [
      {
        Header: 'Land Requirement (m²)',
        accessor: 'landRequirement',
        Filter: RangeFilter,
        filter: 'between',
      },
      {
        Header: 'Water Requirement (m²)',
        accessor: 'waterRequirement',
        Filter: RangeFilter,
        filter: 'between',
      },
      {
        Header: 'Climbing Requirement (m²)',
        accessor: 'climbingRequirement',
        Filter: RangeFilter,
        filter: 'between',
      },
      {
        Header: 'Minimum Temperature (°C)',
        accessor: 'minimumTemperature',
        Filter: RangeFilter,
        filter: 'between',
      },
      {
        Header: 'Maximum Temperature (°C)',
        accessor: 'maximumTemperature',
        Filter: RangeFilter,
        filter: 'between',
      },
    ],
  },
  {
    Header: 'Fence',
    columns: [
      {
        Header: 'Fence Grade',
        accessor: 'fenceGrade',
        Filter: RangeFilter,
        filter: 'between',
      },
      {
        Header: 'Minimum Fence Height (m)',
        accessor: 'minimumFenceHeight',
        Filter: RangeFilter,
        filter: 'between',
      },
      {
        Header: 'Requires climb proof fencing?',
        accessor: 'requiresClimbProof',
        Cell: ({ value }) => {
          if (value) {
            return <span role="img" aria-label="Yes">✅</span>;
          }
          return <span role="img" aria-label="No">❌</span>;
        },
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
    ],
  },
];
