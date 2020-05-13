import React, { useEffect } from 'react';
import Popover from 'react-bootstrap/Popover';

export default React.forwardRef(
  ({
    popper, children, ...props
  }, ref) => {
    useEffect(() => {
      popper.scheduleUpdate();
    }, [children, popper]);

    return (
      <Popover ref={ref} {...props}>
        {children}
      </Popover>
    );
  },
);
