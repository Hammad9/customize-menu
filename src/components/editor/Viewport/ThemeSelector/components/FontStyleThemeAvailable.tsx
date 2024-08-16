import React, { useEffect, useState } from "react";
import {
  Typography,
  useTheme,
  Box,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useNode } from "@craftjs/core";
import { appendStylesAccordingToColorTheme, getFontLink } from "../../../../../utils/craftJS";

const apiKey = "AIzaSyCgtrELxaSQbVHI_61kU7Mwhsq6XPhsxaY";
const apiEndpoint = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`;

const FontPickerAvailable = () => {
  const appTheme = useTheme();
  const [fonts, setFonts] = useState<any[]>([]);
  const {
    actions: { setProp },
    props,
  } = useNode((node: any) => {
    const props = node.data.props;
    return { props };
  });

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setFonts(
          data.items.map((font: any) => ({
            title: font.family,
            isBold: font.variants.includes("700"),
          }))
        );
      } catch (error) {
        console.error("Failed to fetch fonts:", error);
      }
    };

    fetchFonts();
  }, []);

  const handleSetFont = (event: any, newValue: any) => {
    const fontFamily = newValue?.title || "";
    const link = getFontLink(fontFamily);
    appendStylesAccordingToColorTheme(link || "", fontFamily || "");
    setProp((props: any) => {
      props.fontFamily = fontFamily;
      props.fontLink = link;
    });
  };

  return (
    <Box
      sx={{
        borderRadius: "15px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <Typography sx={{ pt: 1, pb: 1 }} variant="h5">
        Font Styles
      </Typography>
      {typeof window !== "undefined" && (
        <Box
          sx={{
            width: "210px",
            "& .MuiAutocomplete-root": {
              width: "100%",
            },
            "& .MuiAutocomplete-inputRoot": {
              backgroundColor: `${appTheme.palette.background.paper} !important`,
              borderRadius: "10px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: `${appTheme.palette.text.primary} !important`,
                },
                "&:hover fieldset": {
                  borderColor: `${appTheme.palette.primary.main} !important`,
                },
                "&.Mui-focused fieldset": {
                  borderColor: `${appTheme.palette.primary.main} !important`,
                },
              },
            },
            "& .MuiAutocomplete-popupIndicator": {
              color: `${appTheme.palette.text.primary} !important`,
            },
            "& .MuiAutocomplete-option": {
              backgroundColor: `${appTheme.palette.background.paper} !important`,
              color: `${appTheme.palette.text.primary} !important`,
              "&:hover": {
                backgroundColor: `${appTheme.palette.action.hover} !important`,
                color: `${appTheme.palette.text.primary} !important`,
              },
              "&.Mui-focused": {
                backgroundColor: `${appTheme.palette.action.selected} !important`,
                color: `${appTheme.palette.text.primary} !important`,
              },
            },
            "& .MuiAutocomplete-paper": {
              borderRadius: "10px",
              boxShadow: `0px 2px 5px ${appTheme.palette.divider}`,
            },
            "& .MuiAutocomplete-clearIndicator": {
              color: `${appTheme.palette.text.secondary} !important`,
            },
            "& .MuiAutocomplete-option[data-bold='true']": {
              fontWeight: "bold",
            },
          }}
        >
          <Autocomplete
            disablePortal
            id="font-picker"
            options={fonts}
            getOptionLabel={(option) => option.title}
            value={
              fonts.find((option) => option.title === props.fontFamily) || null
            }
            onChange={handleSetFont}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Font" variant="outlined" />
            )}
            renderOption={(props, option) => (
              <li {...props} data-bold={option.isBold}>
                {option.title}
              </li>
            )}
          />
        </Box>
      )}
    </Box>
  );
};

export default FontPickerAvailable;