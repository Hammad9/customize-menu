import { Box, Stack } from '@mui/material';
import React, { FC } from 'react';
import { ColorTheme } from '../../../../../@types/colorTheme';
type Props = {
  theme: ColorTheme;
  qty?: number;
  children: any;
};

const ColorList: FC<Props> = ({ theme, qty = 5, children }) => (
  <Box sx={{ px: 3, py: 2 }}>
    <Stack
      direction="row"
      sx={{
        width: '100%',
        maxWidth: 400,
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
          '& .overlay': {
            display: 'flex',
          },
        },
        '& .overlay': {
          width: '130%',
          height: '130%',
          position: 'absolute',
          top: '-5px',
          left: '-20px',
          display: 'none',
          backdropFilter: 'blur(3px)',
          borderRadius: '8px',
          backgroundColor: '#8a8a8a7a',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      {Object.keys(theme).map((key: string, index: number) => {
        const isColor = key.includes('Color');
        if (!isColor || index + 1 > qty) return null;
        // @ts-ignore
        return <Color key={index} color={theme[key]} />;
      })}
      <Box className="overlay" sx={{}}>
        {children}
      </Box>
    </Stack>
  </Box>
);

const Color = ({ color }: { color: string }) => (
  <Box
    sx={{
      height: 50,
      width: 50,
      borderRadius: '50%',
      backgroundColor: color,
      marginLeft: '-8px',
      border: '1px solid #ebebeb',
    }}
  />
);
export default ColorList;
