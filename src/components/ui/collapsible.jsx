"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { createContext, useContext, useEffect, useRef, useState } from "react";

import { ChevronsDownUpIcon } from "../animated-icons/chevrons-down-up-icon";

function Collapsible(props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger(props) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent(props) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}

const CollapsibleContext = createContext(null);

const useCollapsible = () => {
  const context = useContext(CollapsibleContext);

  if (!context) {
    throw new Error(
      "Collapsible components must be used within a CollapsibleWithContext",
    );
  }

  return context;
};

function CollapsibleWithContext({ defaultOpen, ...props }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <CollapsibleContext.Provider value={{ open }}>
      <Collapsible open={open} onOpenChange={setOpen} {...props} />
    </CollapsibleContext.Provider>
  );
}

function CollapsibleChevronsIcon() {
  const { open } = useCollapsible();

  const ref = useRef(null);

  useEffect(() => {
    const controls = ref.current;
    if (!controls) return;

    if (open) {
      controls.startAnimation();
    } else {
      controls.stopAnimation();
    }
  }, [open]);

  return <ChevronsDownUpIcon ref={ref} />;
}

export {
  Collapsible,
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
};
