import { Divider, IconButton } from '@mui/material';
import CurrentlyAppliedTheme from './CurrentlyAppliedTheme';
import { useEditor } from '@craftjs/core';
import FontPickerModal from '../components/FontStyleTheme';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { MenuCardSettings } from '../../../../../components/Craftjs/Menu/MenuCardSettings';
import { useResponsive } from '../../../../../hooks/index';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ThemeSelector = () => {
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const isDesktop = useResponsive('up', 'md');
  return (
    <Box sx={{ width: '100%' }}>
      {/* {enabled && (
        <Box sx={{ width: '100%', overflow: 'hidden' }}> */}
      <Box
      // sx={{
      //   borderBottom: 1,
      //   borderColor: 'divider',
      //   display: 'flex',
      // }}
      >
        {/* {!isDesktop && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <IconButton
                  aria-label="close"
                  sx={{
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            )} */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            paddingLeft: 0,
          }}
          variant="scrollable"
          scrollButtons
        >
          <Tab
            sx={{
              margin: '0px !important',
              marginRight: '20px !important',
              marginLeft: { xs: '20px !important', md: '0px !important' },
            }}
            label="Colors"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ margin: '0px !important', marginRight: '20px !important' }}
            label="Fonts"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ margin: '0px !important', marginRight: '20px !important' }}
            label="Borders"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <Box sx={{ height: "calc(100vh)", overflowY: "scroll" }}> */}
          <CurrentlyAppliedTheme />
          {/* <Divider sx={{ m: 1 }} /> */}
        {/* </Box> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FontPickerModal />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{
          marginLeft: "30px"
        }}>
          <MenuCardSettings />
        </Box>
      </TabPanel>
      {/* </Box>
      )} */}
    </Box>
  );
};

export default ThemeSelector;
