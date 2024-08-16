import React from 'react';
import { Box, Slider, Typography } from '@mui/material';
import { useNode } from '@craftjs/core';

type BorderRadiusProps = {
  borderRadius: number;
  maxValue: number;
  defaultBorder: number;
};

const BorderRadiusSlider = ({ borderRadius, maxValue, defaultBorder }: BorderRadiusProps) => {
  const {
    actions: { setProp },
  } = useNode();

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setProp((props: any) => (props.borderRadius = newValue));
  };

  return (
    <Box paddingY={'30px'}>
      <Typography gutterBottom>Border Radius</Typography>
      <Slider
        value={borderRadius}
        onChange={handleSliderChange}
        max={maxValue}
        defaultValue={defaultBorder}
        aria-labelledby="border-radius-slider"
      />
    </Box>
  );
};

export default BorderRadiusSlider;
