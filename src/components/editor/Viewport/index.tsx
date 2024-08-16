import { useEditor } from '@craftjs/core';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import { HeaderForCards } from './HeaderForCards';
import ElementSettings from './ElementSettings/container/ElementSettings';
import { useEventContext } from '../../../BuilderLayoutContext';

export const Viewport: React.FC<{
  children: ReactElement;
}> = ({ children, }) => {
  const {
    actions: { setOptions },
  } = useEditor((state) => ({ enabled: state.options.enabled }));
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.down('md'));
  const { isMobileView } = useEventContext()

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
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <Box>
      <HeaderForCards />
      <Box className="viewport">
        <Grid
          container
          className="page-container"
          sx={{
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            lg={3.5}
          >
            <ElementSettings />
          </Grid>

          <Grid
            item
            xs={6}
            md={8}
            lg={8.5}
            className="containerScroll builder__content"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              overflowX: 'hidden',
            }}
          >
            <Box
              sx={{
                height: "inherit",
                maxWidth: !isMobileView ? '100%' : '60%',
              }}
              className="containerScroll craftjs-renderer"
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
