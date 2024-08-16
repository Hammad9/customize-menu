import React from "react";
import { colorPickerConfig } from "../config/colorPickerConfig";
import {
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import { useNode } from "@craftjs/core";
import { debounce } from "debounce";
import GradientColorPicker from "../../../../../components/GradientColorPicker";
import { ColorTheme } from "../../../../../@types/colorTheme";
import ImagePicker from "../../ImageSelector/components/ImagePicker";
import AvailableColorThemes from "./AvailableColorThemes";
import { a11yProps, TabPanel } from "./ThemeSelector";
const CurrentlyAppliedTheme = () => {

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const {
    theme,
    actions: { setProp },
  } = useNode((node: any) => {
    const theme = node.data.props.theme
    return { theme };
  });
  const handleSetColor = debounce((colorKey: string, color: string) => {
    setProp((props: any) => {
      props.theme[colorKey] = color;
    })
  }, 200);

  return (
    <Box sx={{ width: '100%', justifyContent: 'center' }}>
      <Box pl={4} pt={1} pb={1}>
        {colorPickerConfig.map(({ label, description, colorKey }, i) =>
          <GradientColorPicker
            key={i}
            label={label}
            description={description}
            color={theme[colorKey as keyof ColorTheme] as string}
            onChange={(color) => handleSetColor(colorKey, color)}
            hideControls={true}
          />
        )}
      </Box>
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
            margin: "0px !important",
            marginRight: "20px !important",
            marginLeft: { xs: "20px !important", md: "0px !important" },
          }}
          label="Available Theme"
          {...a11yProps(0)}
        />
        <Tab
          sx={{ margin: "0px !important", marginRight: "20px !important" }}
          label="Available Patterns"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AvailableColorThemes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ImagePicker />
      </TabPanel>
    </Box>
  );
};

export default CurrentlyAppliedTheme;
