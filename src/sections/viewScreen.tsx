import { CRAFT_ELEMENTS } from "../components/Craftjs/config/craftElements";
import { PreviewViewPort } from "../components/editor/Viewport/PreviewViewPort";
import { Editor } from "@craftjs/core";
import CardPreview from "./CardPreview";
import MenuContainer from "../components/Craftjs/Menu/menuContainer";

export const CraftJsUserComponents = {
  [CRAFT_ELEMENTS.CONTAINER_V2]: MenuContainer,
};
function ViewScreen({ data }: { data: { craftState: string } }) {
  return (
    <Editor resolver={CraftJsUserComponents} enabled={false}>
      <PreviewViewPort>
        <CardPreview data={data} />
      </PreviewViewPort>
    </Editor>
  );
}

export default ViewScreen;
