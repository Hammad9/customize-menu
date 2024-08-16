import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Sidebar, SidebarModal } from '../components';
import { useEditor } from '@craftjs/core';

const ElementSettings = () => {
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.down('md'));
  // if (matches) {
  //   return <SidebarModal />;
  // } else
  return (
    <Box>
      {enabled && (
        <Sidebar />
      )}
    </Box>
  );
};

export default ElementSettings;
