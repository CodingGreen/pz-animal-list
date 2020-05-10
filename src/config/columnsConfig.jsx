import React from 'react';

export default [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ row: { original: { wikiLink, name } } }) => (
      <a href={wikiLink}>{name}</a>
    ),
  },
  {
    Header: 'Fence Grade',
    accessor: 'fenceGrade',
  },
  {
    Header: 'Land Area (m²)',
    accessor: 'landRequirement',
  },
  {
    Header: 'Requires climb proof fencing?',
    accessor: 'requiresClimbProof',
    Cell: ({ value }) => {
      if (value) {
        return '✅';
      }
      return '❌';
    },
  },
];
