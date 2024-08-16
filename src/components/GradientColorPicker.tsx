import { Box, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { SketchPicker } from "react-color";
import useWindowDimensions from '../hooks/useWindowDimensions';

interface ColorPickerProps {
  label: string;
  description?: string;
  color: string;
  onChange(hex: string): any;
  hideControls?: boolean;
  ColorPickerHeight?: number;
  ColorPickerWidth?: number;
}

function GradientColorPicker({
  color,
  onChange,
  label,
  description,
  hideControls = false,
}: ColorPickerProps) {
  const [open, setOpen] = useState(false);
  const { height } = useWindowDimensions();
  const [popOverPosition, setPopOverPosition] = useState<undefined | 'top'>();

  if (!color) {
    color = '';
  }
  useEffect(() => {
    if (open) {
      const { top } = document.getElementById('react-color-picker')?.getBoundingClientRect() || {
        top: 10,
      };

      if (top + 350 > height) {
        setPopOverPosition('top');
      }
    }
  }, [height, open]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const colorPickerPopover = document.getElementById('react-color-picker');
      if (colorPickerPopover && !colorPickerPopover.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box className="color-picker" sx={{ pt: 1, display: 'flex', cursor: 'pointer' }}>
      <Stack
        direction="row"
        spacing={2}
        className="color-circle"
        onClick={() => setOpen(true)}
        sx={{ alignItems: 'center', zIndex: 1 }}
      >
        <Box
          sx={{ height: '40px', width: '40px', borderRadius: '50%' }}
          style={{ background: color }}
        />
        <span style={{ wordBreak: 'break-all' }}>
          <b>{label}</b>
          {description && (
            <React.Fragment>
              <br />
              {description}
            </React.Fragment>
          )}
        </span>
      </Stack>
      {open ? (
        <Box
          sx={{
            position: 'absolute',
            top: '-4px',
            zIndex: 999,
            left: { md: 0, lg: 10 },
            p: 0,
            borderRadius: '8px',
            maxWidth: '300px',
          }}
          className="color-picker__popover"
          id="react-color-picker"
          style={popOverPosition ? { position: 'absolute', bottom: 45 } : {}}
        >
          <Box
            className="color-picker__cover"
            onClick={() => {
              setOpen(false);
            }}
          />
          <div className="color-picker__no-background-styles">
            <Box
              sx={{
                width: "20px",
                borderRadius: "25px",
                position: "absolute",
                top: "7px",
                right: "3px",
                zIndex: "2",
                cursor: "pointer",
                backgroundColor: "lightgray",
                border: "-2px solid rgb(22 28 36)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20px",
                background: "black",
                color: "white",
                "&:hover": {
                  background: "red",
                  color: "white",
                },
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Icon
                onClick={() => {
                  setOpen(false);
                }}
                fontSize={'12px'}
                icon="gridicons:cross"
              />
            </Box>
            <Box
              sx={{
                background: "white !important",
                padding: "10px",
                borderRadius: "10px",
                maxHeight: "350px",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <SketchPicker
                color={color}
                onChangeComplete={(color: any) => onChange(color.hex)}
                disableAlpha={hideControls}
              />
            </Box>
          </div>
        </Box>
      ) : null}
    </Box>
  );
}

export default GradientColorPicker;
