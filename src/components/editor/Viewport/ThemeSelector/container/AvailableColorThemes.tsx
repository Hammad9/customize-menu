import Iconify from '../../../../../components/Iconify';
import { defaultColorTemplates } from '../../../../../constants/colorTemplates';
import React from 'react';
import ColorList from '../components/ColorList';
import checkmark from '@iconify/icons-carbon/checkmark';
import { Box, Stack, Typography } from '@mui/material';
import { useNode } from '@craftjs/core';
const AvailableColorThemes = () => {
  const {
    actions: { setProp },
  } = useNode();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        sx={{
          mt: 1,
          maxHeight: "200px",
          overflow: 'hidden !important',
          overflowY: 'auto !important',
        }}
      >
        {defaultColorTemplates.map((single) => (
          <ColorList key={single.id} theme={single} qty={6}>
            <Iconify
              onClick={() => {
                setProp((props: any) => {
                  props.theme = single;
                })
              }}
              icon={checkmark}
              sx={{ fontSize: 30 }}
            />
          </ColorList>
        ))}
      </Stack>
    </Box>
  );
};

export default AvailableColorThemes;
