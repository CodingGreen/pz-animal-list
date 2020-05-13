import React from 'react';
import SelectColumnFilter from '../components/SelectColumnFilter';
import { ListColumnFilter } from '../components/ListColumnFilter';

export default [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ row: { original: { wikiLink, name } } }) => (
      <a href={wikiLink}>{name}</a>
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
        disableFilters: true,
      },
      {
        Header: 'Water Requirement (m²)',
        accessor: 'waterRequirement',
        disableFilters: true,
      },
      {
        Header: 'Climbing Requirement (m²)',
        accessor: 'climbingRequirement',
        disableFilters: true,
      },
      {
        Header: 'Minimum Temperature (°C)',
        accessor: 'minimumTemperature',
        disableFilters: true,
      },
      {
        Header: 'Maximum Temperature (°C)',
        accessor: 'maximumTemperature',
        disableFilters: true,
      },
    ],
  },
  {
    Header: 'Fence',
    columns: [
      {
        Header: 'Fence Grade',
        accessor: 'fenceGrade',
        disableFilters: true,
      },
      {
        Header: 'Minimum Fence Height (m)',
        accessor: 'minimumFenceHeight',
        disableFilters: true,
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
