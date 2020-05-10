import React from 'react';

export default [
  {
    Header: 'Name',
    id: 'name',
    accessor: (row) => (
      <a href={row.wikiLink}>{row.name}</a>
    ),
  },
  {
    Header: 'Fence Grade',
    accessor: 'fenceGrade',
  },
  {
    Header: 'Land Area (m²)',
    accessor: 'landArea',
  },
  {
    Header: 'Requires climb proof fencing?',
    id: 'requiresClimbProof',
    accessor: (row) => {
      if (row.requiresClimbProof) {
        return '✅';
      }
      return '❌';
    },
  },
];
