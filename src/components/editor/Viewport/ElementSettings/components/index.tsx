import { useEditor } from '@craftjs/core';
import React, { useEffect } from 'react';
import { Box } from '@mui/material';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const Sidebar = () => {
  const { selected, isEnabled } = useEditor((state, query) => {
    //@ts-ignore
    const [currentNodeId] = state.events.selected;

    let selected: {
      id?: string;
      name?: string;
      settings?: React.ElementType<any>;
      isDeletable?: boolean;
    } = {};

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return isEnabled && Object.entries(selected).length ? (
    <Box
      sx={{
      }}
    >
      {selected.settings && React.createElement(selected.settings)}
    </Box>
  ) : (
    <Box />
  );
};
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const SidebarModal = () => {
  const { selected, isEnabled, actions } = useEditor((state, query) => {
    //@ts-ignore
    const [currentNodeId] = state.events.selected;

    let selected: {
      id?: string;
      name?: string;
      settings?: React.ElementType<any>;
      isDeletable?: boolean;
    } = {};

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    actions.selectNode(undefined);
  };

  useEffect(() => {
    if (isEnabled && Object.entries(selected).length) handleOpen();
    else if (Object.entries(selected).length === 0) {
      setOpen(false);
    }
  }, [isEnabled, selected]);

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[100],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));
  return (
    <Box>
      <SwipeableDrawer
        PaperProps={{ sx: { top: '200px', padding: '30px' } }}
        anchor={'bottom'}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <Puller />
        <Box>{selected?.settings && React.createElement(selected.settings)}</Box>
      </SwipeableDrawer>
    </Box>
  );
};
