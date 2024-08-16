import { Frame } from '@craftjs/core';
import { Box } from '@mui/material';
import BuilderInitialized from './builderInitialized';

function CardPreview({ data }: any) {
  return (
    <Box sx={{ boxShadow: (theme) => theme.shadows[20], }}>
      <BuilderInitialized data={data} />
      <Frame />
    </Box>
  );
}

export default CardPreview;
