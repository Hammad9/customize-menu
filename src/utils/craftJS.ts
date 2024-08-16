
export const getFontLink = (family: string) => {
  if (!family) {
    return "https://fonts.googleapis.com/css?family=Exo%202%3Aregular%2Citalic%2C300%2C700&subset=latin&font-display=swap";
  }
  return (
    "https://fonts.googleapis.com/css?family=" +
    family +
    "%3Aregular%2Citalic%2C300%2C700&subset=latin&font-display=swap"
  );
};

export const appendStyles = ({
  _document,
  id,
  styles,
}: {
  _document: any;
  id: string;
  styles: string;
}): void => {
  _document.getElementById(id)?.remove();
  const styleElement = _document.createElement("style");
  styleElement.setAttribute("id", id);
  styleElement.setAttribute("type", "text/css");
  const styleInner = _document.createTextNode(styles);
  styleElement.appendChild(styleInner);
  _document.body.appendChild(styleElement);
};

export const appendStylesAccordingToColorTheme = (
  fontLink: string,
  fontFamily: string
): void => {
  const _document = document;

  if (!fontFamily) {
    return;
  }

  const fontImport = fontLink ? `@import url('${fontLink}');` : "";

  const styles = `
              ${fontImport}

              #menu *{
                font-family: '${fontFamily}', sans-serif !important;
              }
  
          `;

  appendStyles({
    _document,
    id: "brand-color-styles-v2",
    styles,
  });
};
