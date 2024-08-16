import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useNode } from '@craftjs/core';
import Menu from './menuCard';
import backgroundImageStyle from '../../../components/Craftjs/config/backgroundImageStyle';
import { ActionsController } from '../../editor/ActionsController';

// ----------------------------------------------------------------------

export interface Categories {
  title: string;
  position: number;
}


export default function MenuCategories() {
  const {
    actions: { setProp },
    props
  } = useNode((node: any) => {
    const currentNode = node
    const nodeProps = node.data.props
    const nodeId = node.id
    const props = node.data.props;
    return { currentNode, nodeId, nodeProps, props }
  })
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (category: Categories, index: number) => {
    setSelectedCategory(category.title);
    setProp((props: any) => {
      props.selectedCategory = {
        name: category.title,
        position: category.position,
      };
      props.index = index;
    });
  };

  return (
    <ActionsController
      ParentTagProps={{
        sx: {
          mt: 0,
          ...backgroundImageStyle(props.backgroundImageUrl),
        },
      }}
    >
      <div>
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          wrap="wrap"
          sx={{ p: 1 }}
        >
          {props?.categories?.map((category: any, index: number) => (
            <Grid item key={category.title}>
              <Grid container borderRadius={`${props.borderRadius || 0}%`} alignItems="center">
                <Box
                  key={category.title}
                  onClick={() => handleCategoryClick(category, index)}
                  sx={{
                    marginTop: '20px',
                    minHeight: '10px',
                    minWidth: 'auto',
                    padding: '4px 10px',
                    fontSize: props.font.body,
                    cursor: 'pointer',
                    color:
                      selectedCategory === category.title
                        ? 'white'
                        : props.theme.accentColor,
                    backgroundColor:
                      selectedCategory === category.title
                        ? props.theme.headlineColor
                        : props.theme.accentColorContrast,
                    '&:hover': {
                      backgroundColor:
                        props.theme.headlineColor,
                      color: 'white',
                      opacity: 1,
                    },
                  }}
                >
                  {category.title}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Menu />
      </div>
    </ActionsController>
  );
}