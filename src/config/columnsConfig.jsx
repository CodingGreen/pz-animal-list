import React from 'react';
import SelectColumnFilter from '../components/SelectColumnFilter';

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
    Header: 'Fence Grade',
    accessor: 'fenceGrade',
    disableFilters: true,
  },
  {
    Header: 'Land Area (m²)',
    accessor: 'landRequirement',
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
];
