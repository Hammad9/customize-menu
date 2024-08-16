import { useEditor } from '@craftjs/core';
import { useEffect } from 'react';
import { appendStylesAccordingToColorTheme } from '../utils/craftJS';
// @ts-ignore
import lz from 'lzutf8';

const BuilderInitialized = ({ data }: any) => {
  const { actions } = useEditor();

  useEffect(() => {
    if (data?.craftState) {
      const json = lz.decompress(lz.decodeBase64(data?.craftState));
      const props = JSON.parse(json).ROOT.props;
      if (props) {
        appendStylesAccordingToColorTheme(props.fontLink || '', props.fontFamily || '');
      }
      actions.deserialize(json);
      actions.selectNode("ROOT")
    }
  }, [data?.craftState]);

  return null;
};

export default BuilderInitialized;
