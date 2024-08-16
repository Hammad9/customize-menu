import { useNode, useEditor } from '@craftjs/core';
import { Box } from '@mui/material';
import React, { useRef } from 'react';

interface Props {
  children?: any;
  id?: string;
  className?: string;
  ParentTag?: any;
  ParentTagProps?: any;
}

export const ActionsController = ({
  children,
  className = '',
  ParentTag,
  ParentTagProps,
  ...props
}: Props) => {
  const CurrentNodeRef = useRef();
  const {
    connectors: { connect },
    nodeId,
  } = useNode((node) => ({
    nodeId: node.id,
    currentNode: node,
  }));
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  const { selected } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected: any;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  const Tag = ParentTag || Box;
  return (
    <Tag
      {...props}
      ref={(ref: any) => {
        CurrentNodeRef.current = ref;
        connect(ref);
      }}
      className={
        enabled
          ? `actions-controller__wrapper ${className} ${
              selected?.id === nodeId ? 'active-actions-controller__wrapper' : ''
            }`
          : ''
      }
      {...ParentTagProps}
    >
      {children}
    </Tag>
  )
};
