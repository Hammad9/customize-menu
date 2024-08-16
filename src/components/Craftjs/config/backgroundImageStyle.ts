const backgroundImageStyle: any = (
  backgroundImageUrl?: string,
  backgroundColor?: any
) => {
  const style: any = {};

  if (!backgroundImageUrl) {
    style.background = backgroundColor;
  }
  return style;
};

export default backgroundImageStyle;
