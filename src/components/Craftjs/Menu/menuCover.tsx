import { styled } from '@mui/material/styles';
import { Box, Card, Typography } from '@mui/material';
import { ActionsController } from '../../editor/ActionsController';
import { useNode } from '@craftjs/core';
import backgroundImageStyle from '../../../components/Craftjs/config/backgroundImageStyle';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  '&:before': {
    zIndex: 9,
    width: '100%',
    content: "''",
    height: '100%',
    position: 'absolute',
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  padding:"70px",
  [theme.breakpoints.up('md')]: {
    Margin:"20px",
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

const CoverImgStyle = styled('img')({
  zIndex: 8,
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  display:"block"
});

// ----------------------------------------------------------------------


export const ItemTypes = {
  dndElementTypes: 'dndElementTypes',
};

export default function ProfileCover() {
  const {
    props
  } = useNode((node: any) => {
    const props = node.data.props;
    return { props };
  });

  return (
    <ActionsController id={'ProfileCover-container'}>
      <Card
        sx={{
          ...props.sx,
          background: 'transparent',
          ...backgroundImageStyle(
            props.backgroundImageUrl,
            props.theme.backgroundColor
          ),
          borderRadius: '0px !important',
        }}
      >
        <RootStyle id="ProfileCover-container-content">
          <InfoStyle id="mainWrapper">
            <Box
              id="heading-container"
              sx={{
                justifyContent:"center",
                ml: { md: 3 },
                mt: { xs: 1, md: 0 },
                color: props.theme.headlineColor,
              }}
            >
              <Typography
                sx={{
                  alignItems: 'center',
                  justifyContent:"center",
                  display: 'flex',
                  fontSize: {
                    color: props.theme.textColor,
                    fontSize:
                      `${props.font.heading - 4}px !important`,

                    whiteSpace: 'pre-wrap',
                  },
                }}
                id="displayName-Wrapper"
                variant="h3"
              >
                {props.displayName}
              </Typography>
              <Typography
                id="displayName-Wrapper1"
                variant="h5"
                sx={{
                  color: props.theme.textColor,
                  fontSize: `${props.subHeading - 4}px !important`,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {props.designation}
              </Typography>
            </Box>
          </InfoStyle>
          <CoverImgStyle id="coverImg-container" alt="profile cover" src={props.cover} />
        </RootStyle>
      </Card>
    </ActionsController>
  );
}
