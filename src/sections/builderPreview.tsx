import { Frame } from '@craftjs/core';
import { Box, } from '@mui/material';
import BuilderInitialized from './builderInitialized';
import { defaultCraftState } from '../constants/defaultCraftState';

function BuilderPreview() {
  return (
    <Box sx={{ boxShadow: (theme) => theme.shadows[20] }}>
      {typeof window !== 'undefined' && <BuilderInitialized data={{ craftState: defaultCraftState }} />}
      <Frame>
      </Frame>
    </Box>
  );
}

export default BuilderPreview;
