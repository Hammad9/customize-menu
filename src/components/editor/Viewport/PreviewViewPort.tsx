import { useEditor } from '@craftjs/core';
import { Box } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';

export const PreviewViewPort: React.FC<{ children: ReactElement }> = ({
  children,
}: {
  children: ReactElement;
}) => {
  const {
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        '*'
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = false;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <Box>{children}</Box>
  );
};
