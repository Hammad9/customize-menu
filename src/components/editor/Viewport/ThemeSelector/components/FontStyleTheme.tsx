import { Box, Grid, Slider, Typography, useTheme } from '@mui/material';
import FontPickerAvailable from './FontStyleThemeAvailable';
import { FontDataList } from '../config/colorPickerConfig';
import { useNode } from '@craftjs/core';

const FontPickerModal = () => {
  const {
    actions: { setProp },
    font
  } = useNode((node: any) => {
    const font = node.data.props.font
    return { font };
  });

  const appTheme = useTheme();

  return (
    <Box
      sx={{
        padding: `${appTheme.spacing(0, 3.0)} !important`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        cursor: 'pointer',
        paddingInline: '15% !important',
      }}
    >
      <FontPickerAvailable />
      <Grid container>
        <Typography sx={{ pt: 3, pb: 1, width: '100%', textAlign: 'center' }} variant="h5">
          Font Size
        </Typography>
        {FontDataList.map((single, index) => (
          <>
            <Grid
              key={index}
              item
              xs={12}
              sx={{ padding: '0px !important', paddingY: '8px !important' }}
            >
              <Typography key={index}>{single.label}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Slider
                defaultValue={20}
                aria-label="Default"
                valueLabelDisplay="auto"
                value={font[single.selector]}
                onChange={(event, newValue) => {
                  setProp((props: any) => {
                    props.font[single.selector] = newValue;
                  })
                }}
                step={5}
                marks
                min={single.minValue}
                max={single.maxValue}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default FontPickerModal;
