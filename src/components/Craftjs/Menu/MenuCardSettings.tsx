import React from 'react';
import { Box } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { useNode } from '@craftjs/core';
import { Icon } from "@iconify/react";

export const MenuCardSettings = () => {
  const {
    border,
    actions: { setProp },
  } = useNode((node: any) => {
    const border = node.data.props.border
    return { border };
  });

  const handleBorder = (borderProperty: string) => {
    setProp((props: any) => {
      props.border = borderProperty === "none" ? null : borderProperty;
    });
    //context
  };

  const iconStyle = (borderProperty: string) => ({
    margin: "5px",
    padding: "5px",
    borderRadius: "50%",
    border: "1px solid #848482",
    cursor: "pointer",
    fontSize: 45,
    backgroundColor:
      border === borderProperty ||
      (border === null && borderProperty === "none")
        ? "#FA541C"
        : "white",
  });

  return (
    <Box>
      <h2>Border Settings</h2>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          marginRight:"10px",
          justifyContent: "space-between", 
          width: "100%", 
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              transition: "background-color 0.3s",
              height: "55px",
              width: "55px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleBorder("none")}
          >
            <Icon
              icon="mdi:do-not-disturb-alt"
              style={{
                fontSize: "60px",
                color: border === null ? "#FA541C" : "#848482",
              }}
            />
          </Box>
        </Box>
        <Iconify
        sx={iconStyle('solid')}
        onClick={() => handleBorder('solid')}
          icon="gg:border-style-solid"
        />
        <Iconify
        sx={iconStyle('dashed')}
        onClick={() => handleBorder('dashed')}
          icon="gg:border-style-dashed"
        />
        <Iconify
        sx={iconStyle('dotted')}
        onClick={() => handleBorder('dotted')}
          icon="gg:border-style-dotted"
        />
      </Box>
    </Box>
  );
};
