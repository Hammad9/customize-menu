import { Box } from '@mui/material';
import { ColorTheme } from '../../../@types/colorTheme';
import { CRAFT_ELEMENTS } from '../config/craftElements';
import ThemeSelector from '../../../components/editor/Viewport/ThemeSelector/container/ThemeSelector';
import ProfileCover from './menuCover';
import Categories from "./menuCategories"
import { defaultColorTemplates } from '../../../constants/colorTemplates';
import { buttonCategories, menuItems } from './menuItems';

export type ContainerProps = {
  children: React.ReactNode;
  theme: ColorTheme;
  uniqueIdentifier?: string;
  id?: string;
  backgroundImageUrl: string;
};

export default function MenuContainer(props: ContainerProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const backgroundColor = props.theme.backgroundColor;
  return (
    <Box
      id="menu"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor,
        backgroundImage: props.backgroundImageUrl ? `url("${props.backgroundImageUrl}")` : backgroundColor,
        height: "calc(100vh - 60px)",
        overflowY: "scroll"
      }}
    >
      <ProfileCover />
      <Categories />
    </Box>
  );
}

MenuContainer.craft = {
  displayName: CRAFT_ELEMENTS.CONTAINER_V2,
  props: {
    font: {
      headingSize: '',
      subHeadingSize: '',
    },
    theme: defaultColorTemplates[0],
    displayName: 'MENU',
    designation: 'Enjoy our flavors',
    cover: "https://res.cloudinary.com/dwtlafbjn/image/upload/v1721403769/menu-bg_bzwu08.jpg",
    // Categories Props
    selectedCategory: {
      name: 'ALL',
      position: 0,
    },
    index: 0,
    categories: buttonCategories,
    menu: menuItems,
    border: 'dotted',
  },
  rules: {
  },
  // here Theme Selector go into infnite loop
  related: {
    settings: ThemeSelector
  }
};
