import React from "react";
import { Editor } from "@craftjs/core";
import ContainerV2 from "../components/Craftjs/Menu/menuContainer";
import ProfileCover from "../components/Craftjs/Menu/menuCover";
import Icons from "../components/Craftjs/Menu/menuCategories";
import BuilderPreview from "./builderPreview";
import { Viewport } from "../components/editor";
import { CRAFT_ELEMENTS } from "../components/Craftjs/config/craftElements";
//@ts-ignore
import { debounce } from "debounce";
import { Delete } from "@craftjs/utils";
import { useInternalEditorReturnType } from "@craftjs/core/lib/editor/useInternalEditor";
// @ts-ignore
import lz from "lzutf8";
import Menu from "../components/Craftjs/Menu/menuCard";

export const CraftJsUserComponents = {
  [CRAFT_ELEMENTS.CONTAINER_V2]: ContainerV2,
  [CRAFT_ELEMENTS.PROFILE_COVER]: ProfileCover,
  [CRAFT_ELEMENTS.CATEGORIES]: Icons,
  [CRAFT_ELEMENTS.MENU]: Menu,
};

function BuilderScreen() {
  const handleOnNodesChange = debounce(
    (
      query: Delete<useInternalEditorReturnType<any>["query"], "deserialize">
    ) => {
      window.craftJSCraftState = query;
      const nodes = query.getSerializedNodes();
      window.craftJsBuilderNodes = JSON.parse(JSON.stringify(nodes));
      const craftState = lz.encodeBase64(lz.compress(JSON.stringify(nodes)));
      localStorage.setItem("state", craftState);
    },
    2000
  );

  return (
    <>
      <Editor
        resolver={CraftJsUserComponents}
        enabled={true}
        onNodesChange={handleOnNodesChange}
      >
        <Viewport>
          <BuilderPreview />
        </Viewport>
      </Editor>
    </>
  );
}

export default BuilderScreen;
