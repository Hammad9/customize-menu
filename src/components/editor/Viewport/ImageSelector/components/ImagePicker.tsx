import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { Patterns } from './Patterns';
import { useNode } from '@craftjs/core';
import { noPattern } from '../../../../../constants/noPatternPicker';

export default function ImagePicker() {
  const {
    actions: { setProp },
  } = useNode((node: any) => {
    const theme = node.data.props.theme
    return { theme };
  });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Box
          sx={{
            padding: '2px',
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.4s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => {
            setProp((props: any) => {
              props.backgroundImageUrl = "";
            })
          }}
        >
          <img
            style={{
              width: '70px',
              height: '70px',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
            src={noPattern}
            alt="No Pattern"
          />
        </Box>
      </Grid>
      {Patterns.map((currentImg, index) => (
        <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
          <Box
            sx={{
              padding: '2px',
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.4s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => {
              setProp((props: any) => {
                props.backgroundImageUrl = currentImg.imgUrl;
              })
            }}
          >
            <img
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              src={currentImg.imgUrl}
              alt={currentImg.alt}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
