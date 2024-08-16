import { Box, Button, Tooltip } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { useEventContext } from '../../../BuilderLayoutContext';
// @ts-ignore
import lz from 'lzutf8';
import { appendStylesAccordingToColorTheme } from '../../../utils/craftJS';
import { useEditor } from '@craftjs/core';
import { defaultCraftState } from '../../../constants/defaultCraftState';

export const RootStyle = styled('div')(({ theme }) => ({
  position: 'sticky',
  width: '100%',
  backgroundColor: theme.palette.background.default,
  top: 0,
  paddingBlock: 8,
  display: 'flex',
}));

export const Item = styled('p')<{ disabled: boolean; active: boolean }>(({ disabled, active, theme }) => ({
  marginInline: 10,
  cursor: 'pointer',
  pointerEvents: disabled ? 'none' : 'auto',
  opacity: disabled ? 0.5 : 1,
  display: 'flex',
  alignItems: 'center',
  color: active ? theme.palette.primary.main : 'inherit',
}));

export const HeaderForCards = () => {
  const { isMobileView, setIsMobileView } = useEventContext()
  const { actions } = useEditor()

  const value = `${typeof window !== 'undefined' && window.location.origin}/preview/`;
  return (
    <RootStyle
      sx={{
        display: 'flex',
        width: '100vw',
        height: "60px",
        borderBottom: "1px solid #EEEE",
        pr: 3
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: '1',
          alignItem: 'center',
          width: '100%',
          justifyContent: { sm: 'center' },
          marginLeft: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Tooltip title="Mobile" placement="bottom" sx={{ marginInline: '0px !important' }}>
            <Item
              disabled={false}
              active={isMobileView}
              onClick={() => setIsMobileView(true)}
              sx={{
                '&:hover, &:focus': {
                  color: (theme: any) => theme.palette.primary.main,
                },
              }}
            >
              <Icon icon="radix-icons:mobile" fontSize={30} />
            </Item>
          </Tooltip>
          <Tooltip title="Desktop" placement="bottom" sx={{ marginInline: '5px !important' }}>
            <Item
              disabled={false}
              active={!isMobileView}
              onClick={() => setIsMobileView(false)}
              sx={{
                '&:hover, &:focus': {
                  color: (theme: any) => theme.palette.primary.main,
                },
              }}
            >
              <Icon icon="humbleicons:desktop" fontSize={30} />
            </Item>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flex: 0 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <a
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: 'red',
              marginRight: '5px',
              marginTop: '2px',
            }}
            href={`${value}`}
            target="_blank"
            rel="noreferrer"
            color="text.primary"
          >
            <Button
              size="small"
              variant="contained"
              fullWidth
              startIcon={<Icon icon={'ic:sharp-remove-red-eye'} />}
            >
              Preview
            </Button>
          </a>
          <Button
            size="small"
            variant="outlined"
            color='secondary'
            fullWidth
            onClick={() => {
              const json = lz.decompress(lz.decodeBase64(defaultCraftState));
              const props = JSON.parse(json).ROOT.props;
              if (props) {
                appendStylesAccordingToColorTheme(props.fontLink || '', props.fontFamily || '');
              }
              actions.deserialize(json);
              actions.selectNode("ROOT")
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </RootStyle>
  );
};
