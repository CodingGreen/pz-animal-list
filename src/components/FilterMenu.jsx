import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import { GrFilter } from 'react-icons/gr';
import UpdatingPopover from './UpdatingPopover';

export default function FilterMenu({ children }) {
  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={(
        <UpdatingPopover>
          <Popover.Title as="h3">Filter</Popover.Title>
          <Popover.Content>
            {children}
          </Popover.Content>
        </UpdatingPopover>
)}
    >
      <Button variant="light"><GrFilter /></Button>
    </OverlayTrigger>
  );
}
