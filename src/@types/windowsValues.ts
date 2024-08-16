import { SerializedNode } from '@craftjs/core';
import { useInternalEditorReturnType } from '@craftjs/core/lib/editor/useInternalEditor';
import { Delete } from '@craftjs/utils';

declare global {
  interface Window {
    craftJsBuilderNodes: SerializedNode;
    craftJSCraftState: Delete<useInternalEditorReturnType<any>['query'], 'deserialize'>;
  }
}
export {};
