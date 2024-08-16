import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { useEditor, useNode } from '@craftjs/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { fromLeft, fromRight } from './menuItems';

// ----------------------------------------------------------------------

let variants = {};
export default function MenuCard() {
  const {
    parentSelectedCategory,
    index,
    menu,
    actions: { setProp },
    border,
    props
  } = useNode((node: any) => {
    const parentSelectedCategory = node.data.props.selectedCategory;
    const index = node.data.props.index;
    const menu = node.data.props.menu
    const border = node.data.props.border
    const props = node.data.props
    return { parentSelectedCategory, index, menu, border, props };
  });
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const [transitions, setTransitions] = useState(0);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    if (parentSelectedCategory?.name) {
      handleCategoryClick(parentSelectedCategory, index);
    }
  }, [parentSelectedCategory?.name, menu]);

  const handleCategoryClick = (category: any, index: any) => {
    if (order > category.position) {
      variants = fromRight;
      setOrder(category.position);
    } else {
      variants = fromLeft;
      setOrder(category.position);
    }
    setTransitions(index);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: '1rem',
        }}
      >
        {menu?.filter((item: any, i: any) =>
          parentSelectedCategory?.position ? item.id === parentSelectedCategory?.position : true
        ).map((items: any, index: any) => (
          <div
            key={index}
            style={{
              width: '460px',
            }}
          >
            {
              items?.items?.map((item: any, itemIndex: any) => (
                <AnimatePresence key={itemIndex}>
                  <m.div
                    key={transitions}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      padding: '.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={
                        itemIndex === 0
                          ? {
                            margin: '20px 0',
                            fontSize: props.font.subHeading,
                            display: 'block',
                            fontWeight: 400,
                            color: props.theme.headlineColor,
                            textAlign: 'center',
                            borderBottom: `2px solid ${props.theme.accentColor}`,
                            fontFamily: 'Open Sans, Arial, sans-serif',
                          }
                          : {
                            fontSize: props.font.subHeading,
                            display: 'block',
                            fontWeight: 500,
                            color: props.theme.headlineColor,
                            textAlign: 'center',
                            borderBottom: '2px solid #000',
                          }
                      }
                      gutterBottom
                    >
                      {itemIndex === 0 && items.category}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        borderRadius: '8px',
                        fontSize: props.font.body,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: '100%',
                          paddingRight: '10px',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'start',
                            borderBottom: `2px ${border} rgb(213, 213, 213);`,

                          }}
                        >
                          <div
                            style={{
                              fontSize: props.font.body,
                              fontFamily: 'Open Sans, Arial, sans-serif ',
                              color: props.theme.textColor,
                              fontWeight: '600',
                            }}
                          >
                            {item.title}
                          </div>
                          <div style={{ color: props.theme.textColor }}>{item.price}</div>
                        </Box>
                        <div
                          style={{
                            fontStyle: 'italic',
                            fontSize: '14px',
                            color: props.theme.accentColorContrast,
                            fontFamily: 'Open Sans, Arial, sans-serif',
                          }}
                        >
                          {item.description}
                        </div>
                      </Box>
                    </Box>
                  </m.div>
                  {itemIndex === items?.items.length - 1 && enabled && <Box sx={{ display: "flex", justifyContent: "center", }}><AddCircleIcon color='success' sx={{
                    zIndex: 1, cursor: "pointer", "&:hover": {
                      scale: 1.2,
                    }
                  }} onClick={() => {
                    setProp((props: any) => {
                      props.menu = props.menu.map((menu: any) => {
                        if (menu.id === items.id) {
                          menu.items.push({ title: "New Item", price: "0.00", description: "Description" })
                        }
                        return menu;
                      })
                    })
                  }} /></Box>}
                </AnimatePresence>
              ))}
          </div>
        ))}
      </Box>
    </Container>
  );
}

